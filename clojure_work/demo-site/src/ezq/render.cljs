(ns ezq.render
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require
    [cljs.core.async :as a]
    [quiescent.core :as q :include-macros true]
    [quiescent.dom :as d :include-macros true]
    [sablono.core :refer-macros [html]]
    [clojure.core.async :as a]
    [ezq.css :as css]
    [ezq.channeler :as c]))

(enable-console-print!)

(declare Root)
(declare root)
(declare db)
(declare Db)
(declare ticker-button)
(declare reset-button)




(def ticker
  (q/defcomponent ticker [{:keys [ticker]}]
                  (html [:div ticker])))


(defn circle [v]
  (html [:span {:style
                {:font-size        "20px"
                 :display          "block"
                 :width            "25px"
                 :height           "25px"
                 :border-radius    "50%"
                 :border           "2px solid red"
                 :color            "white"
                 :background-color "red"
                 :line-height      "16px"
                 :text-align       "center"
                 :box-sizing       "border-box"}} v]))

(defn turn-status [{:keys [turn winner]}]
  (cond (= winner :tie) "Game is tied!"
        (= winner :x) "You won!"
        (= winner :o) ":o is the winner"
        (= turn :o) (str turn "'s turn to play!")
        (= turn :x) (str "Your turn to play!")))

(def cell (q/defcomponent _ [{:keys [board turn winner]} channels x y]

                          (let [cell-status (get board [x y] nil)
                                color (case cell-status
                                        :x "btn btn-primary"
                                        :o "btn btn-danger"
                                        nil "btn btn-default")
                                style {:width            50
                                       :height           50
                                       :display          "flex"
                                       "justify-content" "center"}

                                opts {:class color
                                      :style style}
                                span (fn [x] [:span opts [:div x]])
                                default [:span
                                         {:class    color
                                          :style    style
                                          :on-click #(c/cell-handler winner x y channels)}
                                         ""]
                                x (span "X")
                                o (span "O")
                                cell-out (html (case cell-status
                                                 :x x
                                                 :o o
                                                 nil default))

                                ] cell-out)))





(def Root (q/defcomponent _ [data channels]
                          ;(let [res (app data channels)]))]

                          (app data channels)))


(defn render
  "Given an Element, immediately render it, rooted to the
   specified DOM node."
  [element node]
  (.render js/ReactDOM element node))

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn ^:export request-render
    "Render the given application state tree."
    [app]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (render (Root @(:state app) (:channels app))
                                          (.getElementById js/document "main")))
                              (reset! render-pending? false)))))

(q/defcomponent board [data channels n m]
                (html
                  [:table {:style {:border 0}}
                   [:tbody
                    (for [x (range n)]
                      [:tr
                       (for [y (range m)]
                         [:td {:style {:height 30
                                       :width  30}}
                          (cell data channels x y)])])]]))


(let [package #(-> %
                   css/flex-item
                   css/flex-box)]
  (defn panel-id [panel-id]
    (let [panel (fn
                  ([body]
                   ((html [:div
                           [:div {:class "panel panel-info"}
                            [:div {:class "panel-body"} body]]])))
                  ([header body]
                   (html [:div
                          [:div {:class "panel panel-info"}
                           [:div {:id panel-id :class "panel-heading"}

                            [:div {:data-toggle "collapse"
                                   :href        (str "#" panel-id "1")} header]]
                           [:div {:id    (str panel-id "1")
                                  :class "panel-collapse collapse in"}
                            (package [:div
                                      {:id    "ticker"
                                       :class "panel-body"}
                                      body])]]]))

                  ([header body footer] (let [heading [:div {:class "panel-heading"}
                                                       [:div {:data-toggle "collapse"
                                                              :href        (str "#" panel-id "1")} header]]
                                              panel-body [:div {:id    (str panel-id "1")
                                                                :class "panel-collapse collapse in"}
                                                          (package [:div
                                                                    {:id    panel-id
                                                                     :class "panel-body"}
                                                                    body])]
                                              panel-booter [:div {:id panel-id :class "panel-footer"} footer]]

                                          (html [:div {:class "panel panel-info"}
                                                 heading
                                                 panel-body
                                                 panel-booter]))))]
      panel)))

(def show-panel (q/defcomponent _ [{:keys [show-ticker]} child]
                                (html [:div
                                       child])))

(def title-btn (q/defcomponent _ [data channels]
                               (html [:button
                                      {:class    "btn btn-primary"
                                       :on-click #(doseq [c [:show-ticker :show-ticker-msg]]
                                                    (am/go (a/>! (get channels c) true)))}
                                      (:show-ticker-msg data)])))


(def show-state (q/defcomponent _ [data {:keys [show-state] :as channels}]
                                (html [:button {:class    "btn btn-success"
                                                :on-click c/show-state}
                                       "Show State"])))


(def ticker-button (q/defcomponent _ [{:keys [ticker-switch]} channels]
                                   (html [:button
                                          {:class    "btn btn-default"
                                           :on-click (partial c/ticker-button channels)}
                                          ticker-switch])))

(def db (q/defcomponent _ [data]
                        (let [header [:thead
                                      {:style {:font-size "2em"}}
                                      [:tr
                                       [:td "Key"]
                                       [:td "Value"]]]
                              body (apply conj [:tbody] (for [[k v] data] [:tr [:td (pr-str k)] [:td (pr-str v)]]))
                              db (html [:div {:class "container"
                                              :style {:max-width "400px"
                                                      :width     "100% !important"}}
                                        [:table {:class "col-lg-3 table table-bordered table-striped table-hover"}
                                         header body]])]
                          (if (:show-state data) db))))


(def input-field (q/defcomponent _
                                 [v]
                                 (d/textarea {:value v})))

(defn blog-post [{:keys [idx title content title-status content-status] :as entry} channels]
  (html [:div

         ; title
         [:div
          {:on-click
                     (if (= :display title-status)
                       #(c/blog-post idx :title-status title-status title-status channels)
                       identity)
           :onChange (fn [e]
                       (let [t (.-target e)
                             v (.-value t)]
                         (c/blog-post idx :title title-status v channels)))
           }
          (if (= :display title-status)
            (css/bold title)
            (css/row (css/col-md 8 (input-field title))
                     (css/col-md 1 [:button {:class    "btn btn-primary"
                                             :on-click #(c/blog-post idx :title-status :done title-status channels)}
                                    "Save"])))]


         ; post
         [:div
          {:on-click
                     (if (= :display content-status)
                       #(c/blog-post idx :content-status content-status content-status channels)
                       identity)
           :onChange (fn [e]
                       (let [t (.-target e)
                             v (.-value t)]
                         (c/blog-post idx :content content-status v channels)))

           }
          (if (= :display content-status)
            [:p content]
            (css/row
              (css/col-md 8 (input-field content))
              (css/col-md 1
                          [:button
                           {:class    "btn btn-primary"
                            :on-click #(c/blog-post idx :content-status :done content-status channels)} "Save"])))]]))

(defn blog [data channels]
  (for [entry (:blog-entries data)] (blog-post entry channels)))


(def reset-button (q/defcomponent _ [channels]
                                  (html
                                    [:button {:class    "btn btn-danger"
                                              :on-click (partial c/reset-button channels)}
                                     "Reset State"])))

(def game-msg
  (q/defcomponent _ [data channels]
                  (html [:div (str "Game: " (turn-status data))])))

(def new-game-btn (q/defcomponent _ [data channels]
                                  (html [:button {:class    "btn btn-success"
                                                  :on-click (if (>= 2 (:wins data))
                                                              #(am/go (a/>! (:new-game channels) true))
                                                              #(do (am/go (a/>! (:restart channels) true)
                                                                          (set! (.-location js/window)
                                                                                "https://www.youtube.com/watch?v=dQw4w9WgXcQ"))))}
                                         (if (>= 2 (:wins data))
                                           "New Game"
                                           "You're on a roll!")])))

(def wins (q/defcomponent _ [data]
                          (css/bold "Games won: " (:wins data))))

(def ai-btn (q/defcomponent _ [data channels]
                            (html [:button {:class    (if (:ai data)
                                                        "btn btn-primary"
                                                        "btn btn-danger")
                                            :on-click #(am/go (a/>! (:ai channels) true))}
                                   (if (:ai data)
                                     "Disable AI"
                                     "Engage AI")])))


(def app (q/defcomponent _
                         [data channels]
                         (let [ticker-btn (ticker-button data channels)
                               ticker (ticker data)
                               db (db data)
                               board (board data channels 3 3)
                               reset-button (reset-button channels)
                               show-state (show-state data channels)
                               game-msg (game-msg data channels)
                               new-game-btn (new-game-btn data channels)
                               ai-btn (ai-btn data channels)

                               top-panel (->> ((panel-id "top-panel") [:h3 "Timer (click me!)"]
                                                ticker
                                                ticker-btn)
                                              (css/col-lg 12)
                                              (css/row))

                               mid-panel (->> ((panel-id "mid-panel") (css/row [:div game-msg (wins data)])
                                                board
                                                (css/row (css/col-sm 2 new-game-btn)
                                                         (css/col-sm 3 ai-btn)))
                                              (css/col-lg 12)
                                              (css/row))

                               bottom-panel (->> ((panel-id "bottom-panel")
                                                   (html [:h3 "App State (click me!)"])
                                                   db
                                                   reset-button)
                                                 (css/col-lg 12)
                                                 (css/row))

                               blog-panel (->> ((panel-id "blog-panel")
                                                 (html [:h3 "Blog (click me!)"])
                                                 (blog data channels))
                                               (css/col-lg 12)
                                               (css/row))


                               left-col (->> [:div
                                              top-panel
                                              mid-panel
                                              (css/col-md 1 (html [:button {:class "btn btn-danger"}
                                                              [:span {:class "glyphicon glyphicon-plus"
                                                                      :on-click #(c/blog-post channels)}]]))
                                              (css/col-md 11 blog-panel)
                                              ]
                                             (css/col-lg 6))

                               right-col (->> [:div bottom-panel] (css/col-lg 6))

                               row (css/container [:div left-col right-col])
                               res row]
                           res)))


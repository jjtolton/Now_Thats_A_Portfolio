(ns ezq.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [sablono.core :refer-macros [html]]
            [quiescent.core :as q :include-macros true]
            [figwheel.client :as fw]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
  ;          )
))

(declare Root)
(declare root)
(declare db)
(declare Db)
(declare ticker-button)
(declare reset-button)


;; data
(def init-state {:show-state true
                 :tick       true
                 :turn       :x
                 :board      {}
                 :winner     nil})

(defonce world (atom init-state))

;; render
(let [render-pending? (atom false)]
  (defn request-render [data]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (q/render (root data) (.getElementById js/document "main"))
                                (reset! render-pending? false))))))

(add-watch world ::render
           (fn [_ _ _ data]
             (request-render data)))

;; logic
(defn winner [{:keys [board] :as data}]
  (if (= (count board) 9)
    :tie
    (let [rows (for [x (range 3)]
                 (for [y (range 3)] [x y]))
          diags [(map vector (range 3) (range 3))
                 (map vector (reverse (range 3)) (range 3))]
          cols (for [x (range 3)] (for [y (range 3)] [y x]))
          all (lazy-seq (concat rows diags cols))
          seqs (vec (map (fn [row]
                           (vec (map
                                  #(get board % -1)
                                  row)))
                         all))
          fseqs (vec (filter #(nil? (some #{-1} %)) seqs))
          wseqs (filter #(= 1 (count (set %))) fseqs)
          winner (if (seq wseqs) (ffirst wseqs) nil)]
      winner)))

(defn update-turn [{:keys [turn] :as data}]
  (assoc-in data [:turn] (get {:x :o :o :x} turn)))

(defn update-board [{:keys [board turn] :as data} x y]
  (assoc-in data [:board [x y]] turn))

(defn update-winner [{:keys [board] :as data}]
  (let [the-winner (winner data)
        ws (if (nil? the-winner) "none" the-winner)]
    (if the-winner
      (assoc data :winner the-winner)
      data)))

(defn update-board-state! [data x y]
  (do (.log js/console (str data " " x " " y))
      (reset! world (-> data
                        (update-board x y)
                        (update-turn)
                        (update-winner)))))

(defn ^:export restart []
  (reset! world init-state))


;; components


(defn turn-status [{:keys [turn winner] :as data}]
  (let [Turn (q/defcomponent Turn [] (cond
                                       (= winner :tie) (html [:div (str "Game is tied!")])
                                       winner (html [:div (str winner " is the winner")])
                                       :else (html [:div (str turn "'s turn to play")])))]
    (Turn)))

(defn cell [{:keys [board turn winner] :as data} x y]
  (let [cell-status (get board [x y] nil)
        style {:style {:margin :auto}}
        span (fn [x] [:span style x])
        cell-out (html (case cell-status
                         :x (span "X")
                         :o (span "O")
                         [:button (when-not winner
                                    {:on-click (fn [] (update-board-state! data x y))}) "[ ]"]))
        Cell (q/defcomponent Cell [] cell-out)]
    (Cell)))

(defn board [data n m]
  (let [-board (html
                 [:table [:tbody
                          (for [x (range n)]
                            [:tr
                             (for [y (range m)]
                               [:td {:style {:height 30
                                             :width  30}}
                                (cell data x y)])])]])
        Board (q/defcomponent Board [] -board)]
    (Board)))

(defn show-state [data]
  (let [Show-state (q/defcomponent Show-state []
                                   (html [:button {:on-click (fn [] (let [state-truth (:show-state data)
                                                                          state-map {true false false true}
                                                                          value (get state-map state-truth)
                                                                          update (fn [] (assoc data :show-state value))
                                                                          doit #(swap! world update)
                                                                          newval (doit)]
                                                                      newval))} "Show State"]))]
    (Show-state)))

(defn root [data]
  (let [Root (q/defcomponent Root
                             []
                             (let [title [:h1 "The Rise and Fall of Ferengal"]
                                   subtitle [:h2 {:style {:offset {:x -10}}} "Intestinal Intentionality"]
                                   tbutton (ticker-button data)
                                   br (html [:br])
                                   stbtn (show-state data)
                                   state (if (:show-state data)
                                           (db data))]
                               (html
                                 [:div
                                  [:h1 "The Rise and Fall of Ferengal"]
                                  subtitle
                                  (turn-status data)
                                  (board data 3 3)
                                  (reset-button)
                                  br
                                  tbutton
                                  br
                                  stbtn
                                  state
                                  ])))]
    (Root data)))


(defn ticker-button [data]
  (let [TickerBtn (q/defcomponent TickerBtn []
                                  (html [:button {:on-click (fn []
                                                              (let [vals {true false false true}
                                                                    cval (get vals (:tick data))
                                                                    nval (swap! world assoc :tick cval)]
                                                                nval))} "Ticker On"]))]
    (TickerBtn)))

(defn db [data]
  (let [Db (q/defcomponent Db [data]
                           (html [:div {:style {:font-size "2em"}} (pr-str data)]))]
    (Db data)))

(defn reset-button []
  (let [btn (html [:button {:on-click restart} "reset!"])
        Reset (q/defcomponent Reset [] btn)]
    (Reset)))

;; go
(defn start
  []
  (request-render @world)
  ;(js/setInterval
  ;  #(swap! world next-tick)
  ;  1000)
  )

(defonce app (start))

;; figwheel
(fw/watch-and-reload :jsload-callback #(swap! world identity))

;; experimental

(defn jsx->clj
  [x]
  (into {} (for [k (.keys js/Object x)] [k (aget x k)])))

(defn ^:export mapalert [jsmap]
  (.log js/console jsmap)
  (.log js/console (-> jsmap js->clj pr-str))
  (let [data (get (jsx->clj jsmap) "thing")]
    (js/alert data)))


(defn ^:export get-response []
  (http/get "www.google.com"))

;(def ^:export headers (:headers (get-response)))
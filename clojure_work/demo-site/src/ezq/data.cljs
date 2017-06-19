(ns ezq.data
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require [ezq.ttt :as logic]))

(enable-console-print!)

(defn pause-ticker-msg [{:keys [tick ticker-switch] :as data}]
  (let [value (case tick
                true "Pause Ticker"
                false "Start Ticker")]
    (assoc data :ticker-switch value)))

(defn show-ticker [data]
  (update data :show-ticker not))

(defn update-turn [{:keys [turn] :as data}]
  (assoc-in data [:turn] (get {:x :o :o :x} turn)))

(defn update-winner [{:keys [board] :as data}]
  (let [the-winner (logic/winner data)
        ws (if (nil? the-winner) "none" the-winner)]
    (cond
      (= the-winner :x) (-> data
                            (assoc :winner the-winner)
                            (update :game-over not)
                            (update :wins inc))
      (= the-winner :o) (-> data
                            (assoc :winner the-winner)
                            (update :game-over not))
      :else data)))

(defn update-board [data [x y]]
  (let [new-board (-> (assoc-in data [:board [x y]] (:turn data))
                      update-winner
                      update-turn)]
    (if (and (:ai new-board)
             (= (:turn new-board) :o)
             (not (:winner new-board))
             (< (count (:board new-board))) 9)
      (let [robo-move (logic/ai-move (:board new-board))]
        (update-board new-board robo-move))
      new-board)))

(defn show-state [data]
  (update data :show-state not))

(defn tick [data]
  (update data :tick not))

(defn ticker [data]
  (update data :ticker inc))

(defn next-tick [{:keys [tick] :as data}]
  (if tick
    (update data :tick not)
    data))


(defn add-blog-entry [{:keys [blog-entries] :as data} entry]
  (update data :blog-entries conj entry))

(defn edit-blog-entry [{:keys [blog-entries] :as data} idx field content]
  (assoc-in data [:blog-entries idx field] content))

(let [swap-status #(get {:display :edit :edit :display} %)]
  (defn update-edit-status [{:keys [blog-entries] :as data} idx field field-status]
    (update-in data [:blog-entries idx field] swap-status)))

(defn blog-entry
  [data [idx field field-status message]]
   (case field-status
     :display (update-edit-status data idx field field-status)
     :edit (edit-blog-entry data idx field message)
     :done (update-edit-status data idx field field-status)
     ;(update-edit-status data idx field field-status)))
     ))

(defn new-entry
  [data _]
   (update data :blog-entries #(conj % {:idx            (count (:blog-entries data))
                                        :title          "Edit-me"
                                        :content        "Edit-me"
                                        :title-status   :edit
                                        :content-status :edit})))

(defn new-game [{:keys [new-game] :as data}]
  (-> data
      (update :new-game inc)
      (assoc :board {})
      (assoc :winner nil)
      (assoc :game-over false)))

(defn wins [data]
  (-> data
      (update :new-game inc)
      (update :wins inc)))

(defn game-over [data]
  (update data :game-over not))

(declare fresh)
(defn ^:export restart []
  (fresh))

(defn ai [data]
  (update data :ai not))

(def world
  {:board         [{} update-board]
   :restart       [false restart]
   :show-state    [true show-state]
   :show-ticker   [true show-ticker]
   :tick          [false tick]
   :ticker        [0 ticker]
   :ticker-switch ["" pause-ticker-msg]
   :turn          [:x update-turn]
   :winner        [nil update-winner]
   :new-game      [0 new-game]
   :game-over     [false game-over]
   :wins          [0 wins]
   :ai            [true ai]
   :blog-entries  [[{:idx            0
                     :title          "Hello World"
                     :content        "First post!"
                     :title-status   :display
                     :content-status :display}]
                   blog-entry]})


(defn fresh []
  (->
    (zipmap (keys world) (map first (vals world)))
    pause-ticker-msg
    ))

(defn handlers []
  (-> (zipmap (keys world) (map second (vals world)))
      (assoc :new-entry new-entry)))


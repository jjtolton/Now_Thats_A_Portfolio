(ns ezq.ttt
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require
    [ezq.render :as render]))

(defn winner [{:keys [board] :as data}]
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
        winner (if (seq wseqs) (ffirst wseqs) nil)
        tie (= 9 (count board))]
    (cond
      winner winner
      (and winner tie) :tie
      tie :tie)))

(defn ai-move
  ([board]
   (ai-move board (rand-int 3) (rand-int 3)))
  ([board x y]
   (.log js/console "Attempting robo-move: " x " " y)
   (.log js/console "Current board spots: " (pr-str (for [k (keys board)] (str k))))
   (if (get board [x y])
     (ai-move board)
     [x y])))


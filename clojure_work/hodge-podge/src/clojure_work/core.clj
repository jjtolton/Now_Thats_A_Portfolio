(ns clojure-work.core
  (:require [clojure-work.project-euler.pe1 :as pe1]))

(defn some-keys [{:keys [hi there] :as stuff}]
  (do (println hi there stuff)))


(defn some-keys2- [{del :delete}]
  (println del))

(some-keys2- {:delete "everything"})



(println (let [this [1 2 3]]
           (cond->> this
                    (>= (count this) 2) (some #{1})
                    nil (some #{4}))))


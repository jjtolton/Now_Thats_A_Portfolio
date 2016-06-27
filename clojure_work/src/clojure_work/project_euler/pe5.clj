;Smallest multiple
;Problem 5
;
; 2520 is the smallest number that can be divided by each
; of the numbers from 1 to 10 without any remainder.
;
; What is the smallest positive number that is evenly
; divisible by all of the numbers from 1 to 20?
;
;
;Answer:
;232792560


(ns clojure-work.project-euler.pe5)

(defn divis-by-lessers
  [greatest-divisor n]
  (loop [x (+ 1 greatest-divisor)]
    (let [lesser (- x 1)]
      (cond (= 1 lesser) true
            (not (= 0 (mod n lesser))) false
            :else (recur lesser)))))

(defn find-divis
  [greatest-divisor]
  (let [div-test (partial divis-by-lessers greatest-divisor)]
    (loop [x greatest-divisor]
      (if (div-test x) x
                       (recur (+ greatest-divisor x))))))
(defn main
  []
  (time (println (find-divis 20))))

(main)
; Sum square difference
; Problem 6
;
; The sum of the squares of the first ten natural numbers is,
;
; 1 ** 2 + 2 ** 2 + ... + 10 ** 2 = 385
; The square of the sum of the first ten natural numbers is,
;
; (1 + 2 + ... + 10) ** 2 = 552 = 3025
; Hence the difference between the sum of the squares of
; the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
;
; Find the difference between the sum of the squares of the
; first one hundred natural numbers and the square of the sum.
;
;
; Answer:
; 25164150

(ns clojure-work.project-euler.pe6)

(defn main
  []
  (let [rng (range 1 101)
        sqr #(* % %)
        sum (partial reduce +)]
    (time (println (- (sqr (sum rng))
                      (sum (map sqr rng)))))))

(main)




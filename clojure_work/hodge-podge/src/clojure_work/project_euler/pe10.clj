; Summation of primes
; Problem 10
; The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
;
; Find the sum of all the primes below two million.
;
;
; Answer:
; 142913828922

(ns clojure-work.project-euler.pe10)

(defn prime?
  [n]
  (cond (< n 2) false
        (some #{n} [2 3]) true
        (= 0 (mod n 2)) false
        :else (let [base (Math/round (Math/sqrt n))
                    upto (if (= 0 (mod base 2))
                             (+ 1 base)
                             base)]
               (loop [x upto]
                 (cond (<= x 2) true
                          (= 0 (mod n x)) false
                          :else (recur (- x 2)))))))

;; print result
;(time (println (reduce + (take-while #(<= % 2000000) (filter prime? (cons 2 (range 1 2000001 2)))))))

(time (reduce + (take-while #(<= % (* 2 (Math.pow 10 6) (comp [(partial cons 2) (partial prime?)])(range 1 2000001 2))))))
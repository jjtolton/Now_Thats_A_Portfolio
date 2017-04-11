; 10001st prime
; Problem 7
; By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
; we can see that the 6th prime is 13.
;
; What is the 10001st prime number?
;
;
; Answer:
; 104743

(ns pe7)

(defn divisible?
  [a b]
  (= 0 (mod b a)))

(defn prime?
  [n]
  (cond (some #{n} [1 2 3]) true
        (= 0 (mod n 2)) false
           :else
           (let [base (Math/round (Math/sqrt n))
                 upto (if (= 0 (mod base 2))
                        (+ 1 base)
                        base)]
             (loop [x upto]
                   (cond (<= x 1) true
                         (divisible? x n) false
                         :else (recur (- x 2)))))))

(defn odds*
  ([] (odds* 1))
  ([n] (cons n (lazy-seq (odds* (+ 2 n))))))

(defn primes*
  ([] (primes* 2))
  ([n] (cons n (filter prime?  (lazy-seq (odds* 3))))))

(defn -main
  []
  (time (println (last (take 10001 (primes*))))))

(-main)
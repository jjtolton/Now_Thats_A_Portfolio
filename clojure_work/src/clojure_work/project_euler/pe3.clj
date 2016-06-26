;Largest prime factor
;Problem 3
;The prime factors of 13195 are 5, 7, 13 and 29.
;
;What is the largest prime factor of the number 600851475143 ?
;
;Answer: 6857

(ns pe3)


(defn prime?
  [n]
  (let [base (Math/round (Math/sqrt n))
        up-to (if (= 0 (mod base 2))
                (+ base 1)
                base)]
    (loop [x up-to]
      (cond
        (or (<= x 1) (= x 2)) true
        (= 0 (mod n x)) false
        :else (recur (- x 2))))))

(defn gen-odds*
  ([] (gen-odds* 1))
  ([n] (cons n (lazy-seq (gen-odds* (+ 2 n))))))

(defn gen-primes*
  []
  (filter prime? (drop-while #(<= % 1) (gen-odds*))))

(defn factor?
  [a b]
  (= 0 (mod a b)))

(defn prime-factor?
  [base n]
  (and (prime? n)
       (factor? base n)))

(defn -main
  "Largest prime of 600851475143 is 6857"
  []
  (let [base 600851475143
        stopping-point (Math/round (Math/sqrt base))]

    (println (last (filter (partial prime-factor? base)
                           (take-while #(< % stopping-point) (gen-primes*)))))))

(time (-main))

;Multiples of 3 and 5
;Problem 1

;If we list all the natural numbers below 10 that are
; multiples of 3 or 5, we get 3, 5, 6 and 9.
; The sum of these multiples is 23.
;
;Find the sum of all the multiples of 3 or 5 below 1000.

(ns clojure-work.project-euler.pe1)

(defn get-common-multiples
  [multiples]
  (let [[lowest & others] (sort multiples)
        mults (fn nxt
                ([] (nxt lowest))
                ([n] (cons n (lazy-seq (nxt (+ n lowest))))))]
    (filter
      (fn [x] (every? true? (map #(= (mod x %) 0) others)))
      (mults))))

(defn inc-by [n]
  (let [-inc-by (fn nxt
                 ([] (nxt 0))
                 ([x] (cons x (lazy-seq (nxt (+ x n))))))]
    (-inc-by)))

(defn get-multiples
  [stop factors]
  (let [mult-seq #(inc-by %)]
    (loop [[fst & others] factors
           multiples #{}]
      (if (not fst)
        multiples
          (recur others
                 (into multiples (take-while #(< % stop) (mult-seq fst))))))))

(defn -main [] (println (reduce + (get-multiples 1000 [3 5]))))

(-main)




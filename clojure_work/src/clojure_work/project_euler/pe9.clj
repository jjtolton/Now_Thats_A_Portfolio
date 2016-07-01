; Special Pythagorean triplet
; Problem 9
; A Pythagorean triplet is a set of three natural numbers,
; a < b < c, for which,
;
; a ** 2 + b ** 2 = c ** 2
; For example, 32 + 42 = 9 + 16 = 25 = 52.
;
; There exists exactly one Pythagorean triplet
; for which a + b + c = 1000.
; Find the product abc.
;
;
; Answer:
; 31875000

(ns clojure-work.project-euler.pe9)



(defn triplets*
  []
  (for [x (range 334)
        y (range 500)
        z (range 500)]
    [x y z]))


(defn main
  []
  (let [sqr #(* % %)
        triplet? (fn [a b c] (= (sqr c) (+ (sqr a) (sqr b))))
        eq1000? (fn [a b c] (= 1000 (+ a b c)))
        num? (fn [a b c] (and (triplet? a b c)
                              (eq1000? a b c)))]
    (time (let [val (last (filter #(apply num? %) (triplets*)))]
            (do (println val)
                (println (apply * val)))))))

(main)
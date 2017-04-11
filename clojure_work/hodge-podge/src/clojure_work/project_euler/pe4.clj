;Largest palindrome product
;Problem 4
;A palindromic number reads the same both ways. The largest palindrome made from the product
; of two 2-digit numbers is 9009 = 91 × 99.
;
;Find the largest palindrome made from the product of two 3-digit numbers.

(ns clojure-work.project-euler.pe4)

(defn pe4products
  []
  (loop [products []
         a 100
         b 99]
    (let [-products (conj products [a b (* a b)])
          -a (if (= b 999) (+ 1 a) a)
          -b (if (= b 999) 100 (+ 1 b))]
      (if (= -a 999) -products
                    (recur -products -a -b)))))

(defn palindomes*
  [products]
  (loop [-products products
         palindromes []]
    (let [[first-prods & rest-prods] -products
          [a b prod] first-prods
          -palindromes (if (= (apply str (reverse (str prod)))
                              (str prod))
                         (conj palindromes first-prods)
                         palindromes)]
      (if (empty? rest-prods) -palindromes
                              (recur rest-prods -palindromes)))))

(defn main
  []
  (time (println (last (sort-by #(let [[a b prod] %] prod)
                                (palindomes* (pe4products)))))))

(main)


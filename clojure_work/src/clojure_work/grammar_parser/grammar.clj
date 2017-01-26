(ns clojure-work.grammer-parser.grammar
  (:require clojure.tools.trace))

(def t true)

(defn append [& seqs]
  (reduce #(into %1 %2) [] (apply (partial conj []) seqs)))

(defn one-of [items]
  (conj [] (rand-nth items)))

(defn part-of-speech* [pos]
  (cond (== 2 (rand-nth [1 2])) (append (pos) (part-of-speech* pos))
        :else nil))

(defn Article [] (one-of '(the a)))
(defn Noun [] (one-of '(man ball woman table)))
(defn Verb [] (one-of '(hit took saw liked)))

(defn Adj [] (one-of '(big little blue greed adiabatic)))
(defn PP [] (one-of '(to in by with on)))

(defn Adj* [] (part-of-speech* Adj))
(defn PP* [] (part-of-speech* PP))

(defn noun-phrase [] (append (Article) (Adj*) (Noun) (PP*)))
(defn verb-phrase [] (append (Verb) (noun-phrase)))
(defn sentence [] (append (noun-phrase)(verb-phrase)))

(def ^:dynamic *simple-grammar*
  '((sentence     -> (noun-phrase verb-phrase))
     (noun-phrase -> (Article Noun))
     (verb-phrase -> (Verb noun-phrase))
     (Article     -> the a)
     (Noun        -> man ball woman table)
     (Verb        -> hit took saw liked))
  ; "a grammar for a trivial subset of English"
  )

(def ^:dynamic *bigger-grammar*
    '((sentence     -> (noun-phrase verb-phrase))
       (noun-phrase -> (Article Adj Noun Prep) (Name) (Pronoun))
       (verb-phrase -> (Verb noun-phrase))
       ;(PP*         -> () (PP Prep))
       ;(Adj*        -> () (Adj Adj*))
       (PP          -> (Prep noun-phrase))
       (Prep        -> to in by with on)
       (Adj         -> big little blue green adiabatic)
       (Article     -> the a)
       (Name        -> Pat Kim Lee Terry Robin)
       (Noun        -> man ball woman table)
       (Verb        -> hit took saw liked)
       (Pronoun     -> he she it these those that ) ) )

(def ^:dynamic *grammar* *bigger-grammar*)

(defn find-in [key map-list]
  (loop [word (first map-list)
         others (rest map-list)]
    (cond (= (first word) key) word
          (empty? others) []
          :else (recur (first others) (rest others)))))

(defn rule-lhs
  [rule]
  (first rule))

(defn rule-rhs
  [rule]
  (-> rule rest rest))

(defn rewrite
  [category]
  "Return a list of possible grammars associated with this category"
  (rule-rhs (find-in category *grammar*)))

(defn mappend
  [f coll]
  (apply append (map f coll)))



(defn ^:dynamic generate
  [phrase]
  (let [choices (rewrite phrase)]
    (cond (list? phrase) (mappend generate phrase)
        (empty? choices) (list phrase)
        :else (-> choices rand-nth recur))))


(defn generate-tree
  [phrase]
  (let [choices (rewrite phrase)]
    (cond (list? phrase) (map #'generate-tree phrase)
          (empty? choices) (list phrase)
          :else (cons phrase (-> choices rand-nth generate-tree)))
  ))

(defn combine-all
  [xlist ylist]
  (mappend (fn [y]
             (map (fn [x] (append x y)) xlist))
             ylist))

(defn any? [seq] (not (not-any? seq)))

(defn generate-all
  [phrase]
  (let [choices (rewrite phrase)]
    (cond (and (list? phrase) (empty? phrase)) (list nil)
          (list? phrase) (combine-all (generate-all (first phrase))
                                      (generate-all (rest phrase)))
          (some identity choices) (mappend generate-all choices)
          :else (-> phrase list list))))

(defn -main []
  (let [phrases '(sentence sentence sentence sentence)]
               (loop [word (first phrases)
                      words (rest phrases)]
                 (cond (empty? words) nil
                       :else (do (println (generate word))
                                 (recur (first words)
                                        (rest words)))))))

;(-main)

(clojure.tools.trace/dotrace [generate] (generate 'sentence))
;(println (generate-tree 'sentence))

;;(println (rewrite 'the))
;(def answer (generate-all 'sentence))
;(println (count answer))
;(loop [cur (first answer)
;       others (rest answer)]
;  (cond (empty? others) nil
;        :else (do (println cur)
;            (recur (first others)
;                   (rest others)))))

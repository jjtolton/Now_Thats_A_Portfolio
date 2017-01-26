(ns clojure-work.pattern-matcher.patterns)

;;;;;;;;;;;;;;;;;;
;; utility code ;;
;;;;;;;;;;;;;;;;;;

(defn symbol-name [x]
  (str (symbol x)))

(defn find-in [key map-list]
  "sort of equivalent to assoc in common lisp"
  (loop [word (first map-list)
         others (rest map-list)]
    (cond (= (first word) key) word
          (empty? others) []
          :else (recur (first others) (rest others)))))

;;;;;;;;;;;;;;;;;;
;; peter's code ;;
;;;;;;;;;;;;;;;;;;


(def fail nil)

(def no-bindings '([t t]))

(defn variable-p [x]
  "is x a variable (a symbol beginning with '?')?"
  (and (symbol? x) (= (first (symbol-name x)) '\?)))


(defn get-binding [var bindings]
  "Find a (variable . value) pair in a binding list"
  (find-in var bindings))

(defn binding-var [binding]
  "Get the variable part of a single binding"
  (first binding))

(defn binding-val [binding]
  "Get the value part of a single binding"
  (last binding))

(defn make-binding [var val] [var val])

(defn lookup [var bindings]
  "Get the value part (for var) from a binding list"
  (binding-val (get-binding var bindings)))

(defn extend-bindings [var val bindings]
  "add a [var value] pair to a binding-list."
  (if (= bindings no-bindings)
    (conj bindings (make-binding var val))))

(defn match-variable [var input bindings]
  "Does VAR match input? Uses (or updates) and returns bindings."
  (let [binding (get-binding var bindings)]
    (cond (not binding) (extend-bindings var input bindings)
          (= input (binding-val binding)) bindings
          :else fail
          )))

(def single-match {'?is  'match-is
                   '?or  'match-or
                   '?and 'match-and
                   '?not 'match-not})

(def segment-match {'?*  'segment-match
                    '?+  'segment-match+
                    '??  'segment-match?
                    '?if 'match-if})

(defn segment-pattern-p [pattern]
  "Is this a segment-matching pattern like ([?* var] pat)?"
  (and (list? pattern) (list? (first pattern))
       (symbol? (ffirst pattern))
       (segment-match-fn (ffirst pattern))))

(defn single-pattern-p [pattern]
  "Is this a single-matching pattern?
  E.g. (?is x predicate) (?and patterns) (?or patterns)."
  (and (list? pattern)
       (single-match-fn (first pattern))))

(defn segment-matcher [pattern input bindings]
  "Call the right function for this kind of segment pattern"
  (segment-match-fn (ffirst pattern)
                    (rest pattern) input bindings))

(defn single-matcher [pattern input bindings]
  "Call the right function for this kind of single pattern"
  (single-match-fn (ffirst pattern)
                   (rest pattern) input bindings))

(defn segment-match-fn [x]
  "Get the segment-match function for x,
  if it is a symbol that has one,"
  (when (symbol? x) (get segment-match x)))

;; matching functions

(defn match-is [var-and-pred input bindings]
  "Succeed and bind var if the input satisfies pred,
  where var-and-pred is the vector [var pred]"
  (let [var (first var-and-pred)
        pred (second var-and-pred)
        new-bindings (pat-match var input bindings)]
    (if (or (= new-bindings fail)
            (not (pred input)))
      fail
      new-bindings)))

(defn match-and [patterns inputs bindings]
  "Succeed if all the patterns match the input"
  (cond (= bindings fail) fail
        (nil? patterns) bindings
        :else (match-and (rest patterns) input
                         (pat-match (first patterns) input
                                    bindings))))

(defn match-or )
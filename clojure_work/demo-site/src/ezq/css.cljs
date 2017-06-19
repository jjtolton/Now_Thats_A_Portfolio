(ns ezq.css
  (:require [sablono.core :refer-macros [html]]))

(defn container [elt]
  (html [:div {:class "container"} elt]))

(defn col [size cols elt]
  (html [:div {:class (apply str (interpose "-" ["col" (str size) (str cols)]))} elt]))

(defn col-lg [cols elt]
  (col "lg" cols elt))

(defn col-md [cols elt]
  (col "md" cols elt))

(defn col-sm [cols elt]
  (col "sm" cols elt))

(defn row [& elt]
  (html (apply conj [:div {:class "row"}] elt)))

(defn flex-box [elt]
  (html [:div {:style {:display "flex"}} elt]))

(defn flex-item [elt]
  (html [:div {:style {:margin "auto"}} elt]))

(defn bold [& s]
  (html (apply conj [:b] s)))


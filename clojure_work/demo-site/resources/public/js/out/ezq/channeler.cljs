(ns ezq.channeler
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require
    [cljs.core.async :as a]))


(defn cell-handler [winner x y channels]
  (when-not winner
    (am/go (a/>! (:board channels) [x y]))))

(defn show-state []
  (am/go (a/>! show-state true)))


(defn ticker-button [channels]
  (doseq [chan [:tick :ticker-switch]]
    (am/go (a/>! (get channels chan) true))))

(defn blog-post
  ([channels]
   (am/go (a/>! (:new-entry channels) true)))
  ([idx field status message channels]
  (am/go (a/>! (:blog-entries channels)
               [idx field status message]))))

(defn reset-button [channels]
  (am/go (a/>! (:restart channels) true)))

(defn new-post [channels]
  (am/go (a/>! (:blog-entries channels) true)))

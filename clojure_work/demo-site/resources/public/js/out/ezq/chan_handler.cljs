(ns ezq.chan-handler
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require
    [cljs.core.async :as a]))


(defn cell-handler [winner x y channels]
  (js-debugger)
  (when-not winner
    #(am/go (a/>! (:board channels) [x y]))))


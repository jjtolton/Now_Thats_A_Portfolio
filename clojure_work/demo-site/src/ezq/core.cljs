(ns ezq.core
  (:require-macros [cljs.core.async.macros :as am :refer [go]])
  (:require
    [clojure.string :as str]
    [cljs.core.async :as a]
    [cljs.core.async :refer [<!]]
    [quiescent.core :as q :include-macros true]
    [cljs-http.client :as http]
    [goog.events :as e]
    [goog.History]
    [sablono.core :refer-macros [html]]
    [figwheel.client :as fw]
    [dirac.runtime :as dirac]
    [ezq.render :as render]
    [ezq.store :as store]
    [ezq.data :as data]
    [ezq.ttt :as logic]
    [reagent.core :as r]))

(enable-console-print!)

;(def conn (d/create-conn dat.sync.client/base-schema))

;(defn new-system []
;  (-> (component/system-map
;        ;;          ;; A sente remote implementation handles client/server comms
;        :remote     (sente-remote/new-sente-remote)
;        ;;          :: Dispatcher accepts messages from wherever (pluggable event streams?) and presents them to the reactor
;        :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
;        ;;          ;; The reactor is what orchestrates the event processing and handles side effects
;        :reactor    (component/using
;                      ;; the reactor needs an :app attribute which points to the DataScript :conn
;                      (reactor/new-simple-reactor {:app {:conn conn}})
;                      [:remote :dispatcher])
;        ;;          ;; The Datsync component pipes data from the remote in to the reactor for processing, and registers
;        ;;          ;; default handlers on the reactor for this data
;        :datsync    (component/using
;                      (dat.sync.client/new-datsync)
;                      [:remote :dispatcher]))))

;; data
(defn init-history
  "Set up Google Closure history management"
  [app]
  (let [h (goog.History.)]
    (.setEnabled h true)
    (e/listen h goog.History.EventType.NAVIGATE
              (fn [evt]
                (let [ch (-> app :channels :nav)
                      token (.-token evt)]
                  (.setToken h token)
                  (am/go (a/>! ch token)))))))


(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [app]
  (doseq [[ch update-fn] (:consumers app)]
    (am/go (while true
             (let [val (a/<! (get (:channels app) ch))
                   _ (.log js/console (str "on channel <" ch ">, recieved value <" val ">"))
                   new-state (swap! (:state app) update-fn val)]
               (render/request-render app))))))


;(.log js/console "All done with init-updates"))

(defn load-app
  "Return a map containing the initial application"
  []
  (let [consumers (data/handlers)
        fresh (data/fresh)
        loaded (let [stored (store/load)]
                 ;; in case we've added new keys to app state
                 ;; don't need to manually refresh
                 (if (= (count (keys fresh))
                        (count (keys stored)))
                   stored
                   nil))
        world (or loaded fresh)
        consumer-keys (keys consumers)

        res {:channels  (zipmap consumer-keys (for [_ consumer-keys] (a/chan)))
             :state     (atom world)
             :consumers consumers}]
    res))

(defonce app (load-app))
(defonce world (:state app))

(defn ^:export main
  "Application entry point"
  []
  (store/init-persistence app)
  (init-history app)
  (init-updates app)
  ;(js/setInterval #(do (.log js/console "updating ticker to: " (:ticker @world))
  ;                     (swap! world update :ticker inc)) 1000)
  (js/setInterval (fn [] (if (:tick @world)
                           (do (am/go
                                 (a/>!
                                   (:ticker (:channels app)) 1))))) 1000)

  (render/request-render app))

(println "running!")
(main)
; fig-wheel stuff



;(add-watch world ::render
;           (fn [_ _ _ data]
;             (render/request-render app)))
;
;(fw/watch-and-reload :jsload-callback #(swap! world identity))



(ns reveal.slides)

(defn bulletpoints [items]
  (let [li-attributes {:class "fragment"}]
    (vec (concat [:ul] (map #(vector :li li-attributes %) items)))))

(defn note [component]
  [:aside {:class "notes"} component])

(def title-slide
  [:section
   [:h1 "ops 2019"]
   [:h3 "tale of bmw and future devplatform"]])

(def intro-myself
  [:section
   [:table
    [:tr
       [:td {:style "vertical-align:middle"}
        [:div
         [:img {:src "img/kazesberger.jpg" :style "max-height:200px;"}]
         [:p "Klaus Azesberger"]
         [:p "@PsychodelicDad"]]]
     [:td [:img {:src "img/bearingpoint.png"}]]]]])

(defn make-tag [tag content]
  (vec (cons tag content)))

(defn table [[& rows :as t]]
  (->> (for [row rows]
         (make-tag :tr
           (for [cell row]
             (make-tag :td cell))))
    (cons {:style "white-space:nowrap;"})
    (cons :table)
    vec))
; current biz

; in tupels:
;  * evolve/scale
;  * demand / competition

; A infrastructure / OPS
;  * private cloud / k8s / openshift / knative / hybrid cloud
;  * long lasting, high demand
;  * super high competition public and hybrid cloud
;  * growing competition

(def what-we-do-present
  [:section
   [:h3 "past/current 'Business'"]

   [:table
    [:thead {:style "font-weight: bold;"}
     [:tr [:td "effort"] [:td "money?"] [:td "product?"]]]
    [:tbody
     [:tr {:class "fragment"} [:td "in house ops / infra"] [:td "no"] [:td "no"]]
     [:tr {:class "fragment"} [:td "datacenter / private cloud"] [:td "yes"] [:td "meh"]]
     [:tr {:class "fragment"} [:td "OPS (mon, log aggr., backup etc.)"] [:td "yes"] [:td "mhhh... meh"]]
     [:tr {:class "fragment"} [:td "DevPlatform (sort of)"] [:td "yes"] [:td "meh"]]]]
   #_(bulletpoints
       ["in house ops / infra"
        "datacenter / private cloud"
        "OPS (mon, log aggr., backup etc.)"
        "DevPlatform (sort of)"])])

(def current-idea
  [:section
   [:h3 "current idea"]
   (bulletpoints
     ["OPS @ K8s world (to some extend 'managed K8s')"
      "become good at this (product-ish mon/log-aggr/etc.)"
      "embrace common interface (K8s)"
      "DevPlatform Product"])])

(def pf30-nutshell
  [:section
   (note
     [:ul
      [:li "Provide Source2Whatever Workflows"]
      [:li "As before: Set of Supported Services"]
      [:li "Workflows require tight Integrations"]
      [:li "Workflows require Extension Points"]
      [:li "Workflows require DevTools"]
      [:li "Sort of 'Managed Knative'"]
      [:li "Sort of 'Evolved OpenShift'"]])

   [:h3 "'PF-3.0' in a nutshell"]
   [:h5 "kinda why we're here :D"]
   (bulletpoints
     ["Source2Whatever Workflows"
      "Set of Supported Services"
      "Tight Integrations"
      "Extension Points"
      "DevTools"
      "Sort of 'Managed Knative'"
      "Sort of 'Evolved OpenShift'"])])

(def provided-servcies-1
  [:section
   [:h3]])

(def provided-servcies-summary
  [:section
   [:h4 "provided  services - summary"]
   (table [[["Build / CI / (CD)"] ["Tekton, Kaniko, Bot(s), (CI-Tool)"]]
           [["Dev-Tools / CD"] ["TBD: Scaffold, Keptn"]]
           [["Platform Services"] [[:ul {:style "list-style-type: none"}
                                        [:li "as before but better integration"]
                                        [:li "(code centric)"]]]]
           [["log aggregation"] ["ELK"]]
           [["Identity / Role Mgmt"] ["Keycloak, (OpenLDAP)"]]
           [["maybe: app catalog"] ["kubeapp"]]
           [["maybe: chat"] ["mattermost or zulip"]]
           [["maybe: better support-tool"] ["never stop dreaming"]]])])


(defn all
  "Add here all slides you want to see in your presentation."
  []
  [title-slide
   intro-myself
   what-we-do-present
   current-idea
   pf30-nutshell
   ;provided-servcies-1
   provided-servcies-summary

   intro-myself])
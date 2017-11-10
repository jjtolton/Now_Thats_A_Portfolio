// Compiled by ClojureScript 1.9.229 {}
goog.provide('bootstrap_cljs.core');
goog.require('cljs.core');
goog.require('cljsjs.react_bootstrap');
goog.require('clojure.string');
goog.require('om_tools.dom');
/**
 * Converts CamelCase / camelCase to kebab-case
 */
bootstrap_cljs.core.kebab_case = (function bootstrap_cljs$core$kebab_case(s){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,clojure.string.lower_case,cljs.core.re_seq.call(null,/\w[a-z]+/,s)));
});
bootstrap_cljs.core.bootstrap_tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"Accordion","Accordion",59577372,null),new cljs.core.Symbol(null,"Alert","Alert",231771408,null),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null),new cljs.core.Symbol(null,"Breadcrumb","Breadcrumb",289232621,null),new cljs.core.Symbol(null,"BreadcrumbItem","BreadcrumbItem",12629998,null),new cljs.core.Symbol(null,"Button","Button",-1787718586,null),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null),new cljs.core.Symbol(null,"ButtonInput","ButtonInput",230367400,null),new cljs.core.Symbol(null,"ButtonToolbar","ButtonToolbar",-679791589,null),new cljs.core.Symbol(null,"Carousel","Carousel",648941630,null),new cljs.core.Symbol(null,"CarouselItem","CarouselItem",-623454820,null),new cljs.core.Symbol(null,"Col","Col",1039814105,null),new cljs.core.Symbol(null,"CollapsibleNav","CollapsibleNav",917130298,null),new cljs.core.Symbol(null,"Dropdown","Dropdown",2045647437,null),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null),new cljs.core.Symbol(null,"Dropdown.Menu","Dropdown.Menu",1534279716,null),new cljs.core.Symbol(null,"Dropdown.Toggle","Dropdown.Toggle",1309013188,null),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null),new cljs.core.Symbol(null,"Image","Image",211370380,null),new cljs.core.Symbol(null,"Input","Input",1777023215,null),new cljs.core.Symbol(null,"Jumbotron","Jumbotron",393154244,null),new cljs.core.Symbol(null,"Label","Label",-2133777657,null),new cljs.core.Symbol(null,"ListGroup","ListGroup",1892018034,null),new cljs.core.Symbol(null,"ListGroupItem","ListGroupItem",1829181456,null),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null),new cljs.core.Symbol(null,"Modal","Modal",-90004031,null),new cljs.core.Symbol(null,"ModalBody","ModalBody",1513860211,null),new cljs.core.Symbol(null,"ModalFooter","ModalFooter",-888382606,null),new cljs.core.Symbol(null,"ModalHeader","ModalHeader",180509938,null),new cljs.core.Symbol(null,"ModalTitle","ModalTitle",-650620581,null),new cljs.core.Symbol(null,"Modal.Body","Modal.Body",-1016987276,null),new cljs.core.Symbol(null,"Modal.Dialog","Modal.Dialog",-18232775,null),new cljs.core.Symbol(null,"Modal.Footer","Modal.Footer",-2089474763,null),new cljs.core.Symbol(null,"Modal.Header","Modal.Header",-1687867373,null),new cljs.core.Symbol(null,"Modal.Title","Modal.Title",-260351877,null),new cljs.core.Symbol(null,"Nav","Nav",1076204984,null),new cljs.core.Symbol(null,"Navbar","Navbar",-626686542,null),new cljs.core.Symbol(null,"Navbar.Header","Navbar.Header",-1586813215,null),new cljs.core.Symbol(null,"Navbar.Toggle","Navbar.Toggle",-521591468,null),new cljs.core.Symbol(null,"Navbar.Brand","Navbar.Brand",1194488345,null),new cljs.core.Symbol(null,"Navbar.Collapse","Navbar.Collapse",-296118970,null),new cljs.core.Symbol(null,"Navbar","Navbar",-626686542,null),new cljs.core.Symbol(null,"NavBrand","NavBrand",-1535022080,null),new cljs.core.Symbol(null,"NavDropdown","NavDropdown",-487723937,null),new cljs.core.Symbol(null,"NavItem","NavItem",926041296,null),new cljs.core.Symbol(null,"Overlay","Overlay",667169413,null),new cljs.core.Symbol(null,"OverlayTrigger","OverlayTrigger",-761703780,null),new cljs.core.Symbol(null,"PageHeader","PageHeader",-17176626,null),new cljs.core.Symbol(null,"PageItem","PageItem",1295119742,null),new cljs.core.Symbol(null,"Pager","Pager",254071639,null),new cljs.core.Symbol(null,"Pagination","Pagination",948953658,null),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null),new cljs.core.Symbol(null,"PanelGroup","PanelGroup",1358084575,null),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null),new cljs.core.Symbol(null,"ProgressBar","ProgressBar",-462834872,null),new cljs.core.Symbol(null,"ResponsiveEmbed","ResponsiveEmbed",-27985947,null),new cljs.core.Symbol(null,"Row","Row",2080485552,null),new cljs.core.Symbol(null,"SafeAnchor","SafeAnchor",1465676075,null),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null),new cljs.core.Symbol(null,"SplitButton.Toggle","SplitButton.Toggle",-1915888120,null),new cljs.core.Symbol(null,"Tab","Tab",-182770927,null),new cljs.core.Symbol(null,"Table","Table",1594602603,null),new cljs.core.Symbol(null,"Tabs","Tabs",-546967870,null),new cljs.core.Symbol(null,"Thumbnail","Thumbnail",-1090913290,null),new cljs.core.Symbol(null,"Tooltip","Tooltip",2066429262,null),new cljs.core.Symbol(null,"Well","Well",-1108536926,null),new cljs.core.Symbol(null,"Collapse","Collapse",-808046484,null),new cljs.core.Symbol(null,"Fade","Fade",-170856841,null),new cljs.core.Symbol(null,"FormControls.Static","FormControls.Static",-914062326,null)], true);

//# sourceMappingURL=core.js.map
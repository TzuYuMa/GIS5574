require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Directions"], (MapView, WebMap, Directions) => {
  const webmap = new WebMap({
    portalItem: {
      id: "9afc43dab85349b595b815582609fbdc"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  
  const directions = new Directions({
    view: view,
    routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/7d0Q6PhsVvdlP0nO/rest/services/World/Route/NAServer/Route_World"
    
  });
  view.ui.add(directions, "top-right");
  
});



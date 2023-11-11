require([
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/Directions"
      ], function(Map, MapView, Directions) {

      var map = new Map({
        basemap: "streets-night-vector"
      });

      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-93.235,44.97723],
        zoom: 12,
        padding: {
          right: 320
        }
      });
      
      // To allow access to the route service and prevent the user from signing in, do the Challenge step in the lab to set up a service proxy
      
      var directions = new Directions({
        view: view,
        routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/7d0Q6PhsVvdlP0nO/rest/services/World/Route/NAServer/Route_World"
      });
      
     view.ui.add(directions, "top-right");
      
    });
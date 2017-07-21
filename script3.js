$(document).ready(function() {
  $('ul li').click(function() {

    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();
  });

  //src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrSSBFSA1p-P-0yuL_B013h-QZupkgEAM&callback=initMap"

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: hsLocation26
  });

  function initMap() {
    var hsLocation1 = {
      lat: 40.692853,
      lng: -73.869010
    };
    var hsLocation2 = {
      lat: 40.678581,
      lng: -73.961951
    };
    var hsLocation3 = {
      lat: 40.697564,
      lng: -73.913097
    };
    var hsLocation4 = {
      lat: 40.688446,
      lng: -73.920763
    };
    var hsLocation5 = {
      lat: 40.658609,
      lng: -73.943108
    };
    var hsLocation6 = {
      lat: 40.715406,
      lng: -73.954943
    };
    var hsLocation7 = {
      lat: 40.695700,
      lng: -73.985901
    };
    var hsLocation8 = {
      lat: 40.669115,
      lng: -73.961781
    };
    var hsLocation9 = {
      lat: 40.792384,
      lng: -73.947379
    };
    var hsLocation10 = {
      lat: 40.790300,
      lng: -73.942962
    };

    var hsLocation11 = {
      lat: 40.802562,
      lng: -73.954124
    };

    var hsLocation12 = {
      lat: 40.695869,
      lng: -73.985621
    };

    var hsLocation13 = {
      lat: 40.709683,
      lng: -73.944512
    };

    var hsLocation14 = {
      lat: 40.767988,
      lng: -73.988214
    };

    var hsLocation15 = {
      lat: 40.765521,
      lng: -73.993173
    };

    var hsLocation16 = {
      lat: 40.745661,
      lng: -73.996429
    };
    ////////////////////////////////
    var hsLocation17 = {
      lat: 40.649386,
      lng: -73.958140
    };

    var hsLocation18 = {
      lat: 40.743246,
      lng: -74.002547
    };
    var hsLocation19 = {
      lat: 40.669858,
      lng: -73.961650
    };
    var hsLocation20 = {
      lat: 40.743139,
      lng: -74.002658
    };
    var hsLocation21 = {
      lat: 40.716916,
      lng: -73.989371
    };
    var hsLocation22 = {
      lat: 40.709634,
      lng: -73.944465
    };
    var hsLocation23 = {
      lat: 40.765628,
      lng: -73.959923
    };
    var hsLocation24 = {
      lat: 40.711101,
      lng: -74.001708
    };
    var hsLocation25 = {
      lat: 40.675952,
      lng: -73.939110
    };
    var hsLocation26 = {
      lat: 40.808589,
      lng: -73.936875
    };
    var hsLocation27 = {
      lat: 40.742033,
      lng: -73.928086
    };
    var hsLocation28 = {
      lat: 40.705329,
      lng: -74.013004
    };
    var hsLocation29 = {
      lat: 40.697421,
      lng: -73.984842
    };
    var hsLocation30 = {
      lat: 40.704913,
      lng: -73.938964
    };
    var hsLocation31 = {
      lat: 40.764004,
      lng: -73.990520
    };
    var hsLocation32 = {
      lat: 40.697305,
      lng: -73.984733
    };
    var hsLocation33 = {
      lat: 40.765508,
      lng: -73.993190
    };
    var hsLocation34 = {
      lat: 40.677484,
      lng: -73.942084
    };
    var hsLocation35 = {
      lat: 40.684654,
      lng: -73.947840
    };
    var hsLocation36 = {
      lat: 40.802583,
      lng: -73.954166
    };
    var hsLocation37 = {
      lat: 40.703502,
      lng: -73.935840
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: hsLocation22
    });

    var marker = new google.maps.Marker({
      position: hsLocation1,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation2,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation3,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation4,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation5,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation6,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation7,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation8,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation9,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation10,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation11,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation12,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation13,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation14,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation15,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation16,
      map: map,
      title: 'Hello World!'
    });
    ////////////////////////////////////////////
    var marker = new google.maps.Marker({
      position: hsLocation17,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation18,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation19,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation20,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation21,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation22,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation23,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation24,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation25,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation26,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation27,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation28,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation29,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation30,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation31,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation32,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation33,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation34,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation35,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation36,
      map: map,
      title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
      position: hsLocation37,
      map: map,
      title: 'Hello World!'
    });
  }
});

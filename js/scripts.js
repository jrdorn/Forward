$(document).ready(function () {
  //Pexel API
  // import { createClient } from "../node_modules/pexels/dist/createClient";
  // const client = createClient(
  //   "563492ad6f917000010000017d4afd1fc5a64199bbb25d9baabcb9aa"
  // );

  // client.photos.show({ id: 6543352 }).then((photo) => {
  //   console.log(photo);
  // });
  // datepicker for Flights and Stuff to Do
  // flatpickr(".calendarpickr", {
  //   minDate: "today",
  //   maxDate: new Date().fp_incr(365),
  //   altInput: true,
  //   altFormat: "F j, Y",
  //   dateFormat: "Y-m-d",
  // });
  // flatpickr(".timepickr", {
  //   enableTime: true,
  //   noCalendar: true,
  //   dateFormat: "H:i",
  // });
  //Create dropdown list of cities
  // let dropdown = $(".city-dropdown");
  // dropdown.append('<option selected="true" disabled>Choose</option>');
  // dropdown.prop("selectedIndex", 0);
  // const url =
  //   "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json";
  // $.getJSON(url, function (data) {
  //   $.each(data, function (key, entry) {
  //     dropdown.append(
  //       $("<option></option>").attr("value", entry.country).text(entry.city)
  //     );
  //   });
  // });

  //Toggle navbar on clicking hamburger icon in mobile
  $("#spinner-form").on("click", function () {
    $("nav").toggle(".hideme");
  });
});

const myApiKey = "4cb5046047b58be1f82bd51c5d0b4927",
  myApiKey2 = "51b66d1c18112050011a7e4248fdc8f6",
  myApiKey3 = "2cae4caef40635500e6dd127a8ac9a9e",
  myApiKey4 = "98de51ac95b3037aa795c34cf3d5521c",
  myInput = document.querySelector(".enterCity"),
  myLocation = document.querySelector(".myLocation"),
  cityStatus = document.querySelector(".status"),
  showInfo = document.querySelector(".allInfo"),
  locationApi = "Navigator.geolocation";

async function getMyWeather(cityName) {
  try {
    const data = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey4}`
      )
    ).json();

    //   console.log(Math.round(data.main.temp - 273.15));

    showInfo.innerHTML += `<p> THE WEATHER IN ${data.name} IS :</p>`;
    showInfo.innerHTML += `<p>tempreture is  ${Math.round(
      data.main.temp - 273.15
    )} C</p>`;
    showInfo.innerHTML += `<p>Wind Speed  ${data.wind.speed} KM/h</p>`;
    showInfo.innerHTML += `<p><img src="${clouds(data.main.temp)}"></p>`;
  } catch (e) {
    console.log(e);
  }
}

function clouds(temp) {
  let str = "";
  if (temp == 800) {
    str =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAwRJREFUWEftl09u2kAUxr8HTp0KqqY3SE5QcoLCpjG7TC8QcoLCCUpPEHqCwgU66QrSTdwTJD1ByAkKii2lKuJVQwy1jbHHMCwiMRIL5PF7v/nevzHhmSx6JpzYgZqO1E7RnaKmFTBtz2iO/pClyoTptYJ8SdavmhiNTAFvDHr1rXTGRKcA1C++FKhLzJcnH/zeJtBrg17JV6eM6QVAh3oAPCQUWifi4VJvf3TXWqADWb4A0FzHIcBdG3utvGmRG3QgS18BasQgxwxWSrkADdUzAlcYqBBmaTHL29ByHeHV8hw0F+hAlpoAKTXD64sNq71KoWt5cPCISZOAT9HXuOsI/1wXVhu0L/cPCdZd2DCDz+vC7+o468tylQCl+kJdAgndnM0BWuoS6Ow/FLcc4Xd0IOd7AtjrkI2hI/wjHRuZoE/VzR8BVOcGCfh5IrzFfx1HIdh2OA10o7ISVOXWH0xkGHDujIFaXXhuHsD53sCuKrh5Cnx3hJfUgyPmE0EDYypElWUYunfEg2bvTD5KX0bSaOQI703WoRNBB7J8E4dkcK+AwuULFN28PTAOsdw9uGljr5dmdwk0oQWNC+Dqe+HfZp1a9/lyUS3e7DjCayXZSQK9C49FxuSoLh5nTdzUSgFVLlwbloirGwFVt58pSIV9thj4XBde2xTg3I7yw6BZa2PgXdx+kt8IaF+WI62jAD42GfJVB05It5EN6yisaiqoI7zMPmtK7bhI8RYYAYmfbBv5uepg8bQDopMvrqiax4sRpzs1TKga9O7fq+ojoerL6lYeTA0e2tg73rRv6hwkGNVqEgaFHL3wLIHGcwXArQ2rtk3YJzX/3qS1xSXQIARqjr8NKaFU7oLJnYKNfbAp+0VClcGNKCT36sKPXM4TqzpIbAUbv5nrRHHTPWMb1mFqww97CC7K6qIbVnZTiIz36b6A6WlS787sk31ZahBIfchtE3jMQGcfVmdVLWSCRlUur3VZTpOxCB7pTL9coFuOe6r5Hahp9XeK7hQ1rYBpe88mR/8BNfI1OuzIZskAAAAASUVORK5CYII=";
  } else if (temp >= 200 && temp <= 232) {
    str =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAsZJREFUWEftmFFyEkEQhv+GWKaKteQGxhOIJzC8CDyZOUHiDcgJgBOoJwieYPQJ8CV4ArmBcAKpClTFqiRttdm1AswwvctiiirmEXq6v+2e/qd3CTuyaEc4sQfNu1L7jO4zmjUDPXt4RCi+A+gEQAVAOfY1AjAGeMi4/dow1+OsMWRf5jMaA7YAOtMBcJdx28kKnAl0YJ+dMPjiQfZ0rMCUwecNM+9qNyR2qUF7tnRGIIHcZH2qm1kzjYNUoD0bHRNwmSaAz5bB79NkVg16acvl37j5maHc3ucqgF+/NXNpuuBSg/Zs1CagFfSYzmBYN7OqZksQVLq7gINTBuRMJdKj8a2yYaDaMLNhyHgt6MBGrW0BJmAM/tww86DEeUH7tnSh18hQPtb9z+O6mb8MeXCC/j/IezxNU62AxmJuQ0+4hf9HBOrUzNUXl+8V0L6NRCePtwCicklAu2ZmnWXjBdD7+/tAtPJRl+syWADt21IToA+PSvk3+GqDLWU0q6jThMDOMY5BRwC/SPvwy/qaC6ivaze5dpfLvwyaYeigSd1cHbky1reRqIcM1KkXA52GmbWTjQugcQZ+pfTqHNk2lzk+r5v5Ryeo/NizpS6BTrWwrrJvUvIk7rLfFR2NJUpGr+dhWHfZNym5xCTge83MFrTceYWmKJtqUv9mS5U70I/wg/uvVO9QEsPKu403s5o7WkL3bSSQ8oYaXL7Jf+2YJ8cAKLbdZ9bf7Q9ptJeIlJvATd/EHxycJag0xzVuJCP/zg0BZQLWKsQdeCJ2DPIO3ASeFoBh6JVEBerRyGA5tdN78Dxs9gEiWpmwCBDdexUHVjWaBjJWAq1p2G5goyEDbwCaPEWxUjXTaXiXziJz6V3uE9A8S+69mXTP57aKQUdpv4JoYuaaUbl+D/GkmWfJt5JRkbFtQObeTJoSZrXJtfRZITT7dgb0D5wBFzqqq2okAAAAAElFTkSuQmCC";
  } else if (temp >= 600 && temp <= 622) {
    str =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABBJJREFUWEftlz9sHEUUxr+3Z3ERtxGmJE1ANHSYAtrYBbk9Cek8rqBK3NBhHCiD8BlBCSSmS+NLRaqbOynK3YUilxaapKNB2E0oMcoespF9D83e3nl2bv/Mrg+kSJ7G1u28eb958973ZggvyKAXhBPnoPM+qfOInke0aAS68sLrhFIdoFUASwAWw7WeANgDeMA46dTE4V5RH8qucI6GgFsAXbcD4CbjZLsocCHQvry4yuBdLXp2rMABg2/UxLBpazCZlxu0KyvXCaQgjUH7jNEAoOCIKUgDWgL4cgzUbU/4m3lgc4F2pbtMwCPDwVMGNmvCH8Q5VjYO0GDgiv6dwet5ImsN+kguLh7h+Hf9uBl8tyaGVjnalW6DgC0d1gG/c1UMVdFlDmtQ01EeyAlFT1Y2Afpeoxp4wl/JpLSpelXdDhauqeM9jSbtl1FaWhEHBzZO9Dk96bYB1Ce/MbCSlDa6XWpE+9LdigKOTfPml+5wLGsLKoUma1mlTyJoT1Z2EzTyL0/4E1HPG9BgfjSqvOeJ4RtZC8WCxkPSPsBtBto2R5Xm2Mx3m6KaAQ3FXEYd8Q1PDG9l7dr2e4LMPSHQdlU8Vzk8M2ZAe9JVOrk8mUkgkWRsC2bOSwANphHQqAp/27SJgJqJDqDjCV9dNuY60kCTijUCauqcrXScZRchtJK+qWQBswVmRDTaPTzhWzeEs8DOKoGSwKi+poKWsfBqEVEvAm2mg6nVJmjk0vFfFFLaJnrS5dNGgO2a8BunRa1ZhhePP7WfrHtxkSjqNrMFFpXEmRzsykqTQNdOF+GmJ4brJki/dfEDJt4g4Neq8DfSQPvS3WHgLWLaqa49vx8315RFswnEgAa9WF29XtEjC6ZbZSo9nuRsT7rPALwWyAnj09qavxMH0G25G0S4HX77wxP+JX3eg5Z7xaHgwjOVQQIeV4U/1fJQX2eXj+9O43mTajwLaJaOxrXURPkJYdXbRo/sFDTp6B/KinqJQr8Qm0efBpp0M0vVSdWpgFJDz9m0JtBtVT4jom/H6cCf19aG38WmQ8yTRh03gTeTbvxWgq7U4BDHKlLLwHFTPXk7nZcvXThx1lHCb9W6fy8Ubf2eMFWMfsf9ECd487A02q3X/342DsBC8IQh8IEDDLKeJFag8VVa+RmgdwNnDj5SsHERVZA8wo9hhv/iieF7RaSsMGhXukcEvBSAMr6orvnfqP/NHO233JtM+DosxH9qwi//r6D9tntzxPiSwE+PHF5VRxoHoFKkPKI2g952CF9VV8cbyjsKRzTOUagEd8ZRpo+TxD0vZKKOFlkoLKaHAN4P7X/yhH+16Fqm3XwjOm6Vn4QR+CGrtebZxFxBlWPVMtXfpJaaB06fO3fQoiBZduegWRHK+/1faDzbOkWuvQgAAAAASUVORK5CYII=";
  } else if (temp >= 701 && temp <= 781) {
    str = "haze.svg";
  } else if (temp >= 801 && temp <= 804) {
    str =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAjxJREFUWEftl1Fu00AQhv8prlxkI8oNkhPQIzQv1H7LcoG2JyA5AeUEzQ1ILsCWp6S8NDcATtBwA1fYEkhRBi01KHa28W66qVvJI+Ulnh1//md2dpbwRIyeCCcaUNeZahRtFHWtgOt4Tmv0iwwO5kwvFeRz8r53RJK4Ar436OWn4JiJugDUr2wKdErMF0dvs9F9oDcGvZQvuozFOUAtMwCeEXb6R+LnhZl/0Wsj0IkMzwH0NnkhwEMfu33bsrAGncjgI0Anm0H+XzWNRNqxiWEFOpFBDyClpgPjYSSyU9NAxqBjudcieNemgU38CCRMa9YCNBgS6NgEwNyHZ5HI2ib+laC3u5vfATg0CWjrw+DTWGTDqnV3gl7J/f3fmMttAS6BfY5EquvBBXYtaA55BeCg6ksdPE8ikb6qiqMFncjw6wNB5nzc87E7WtdbV0DdtqAqnVaeDyKR9nWrdKDX5seiNYjJgqkPT5TVLYCq6WcBUmmv1Rj4EIv0bBmiADqW4RkB72ulvH154sNrL6v6WEHBQCcW6fSfaAXQmjdSKZHcj0Q20IKOZXhIgOqftVu5TjW7PlRT+d/rRJ1WPlpXQB/LhmLM27H4NdOmXv2ZH5+qiF/XpSiDR7HICsO59gjN+6mCraMEbnx4rbUNf1nBfFBWF7EHVJZ+7GDRfSOyb+VsVs6jYxmcEEhd5LYJfMPAYA/e4K7BpBK0qHLofHh+Bk50ClorWteGakC3rbxVjW4bZl38BtS1+o2irhX9A44HsisNY+XrAAAAAElFTkSuQmCC";
  } else if ((temp >= 500 && temp <= 531) || (temp >= 300 && temp <= 321)) {
    str =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAzhJREFUWEftmF9O20AQxr9JIlEprkpPUHqC0hMQXorTF9heALhBOEGSE5SegPQCXXhpwhPhBnCCJidoqjoSlUKnWmMHe70br51QCSn7GO96fjt/vhmH8EwWPRNOrEFXHam1R9ceLeuBvnyxRajuA3QAYBvAZvSuGwAjgIeM+4umuBuVtaHOlc7RCLAN0JEbAPcY992ywKVAL+XLAwafJbznxgpMGHzSFNOe64F4X2HQvqwfEUhBaovGjL9DgMIQU5gGtA3wGwPUF18ErSKwhUD70msQcKUZuGWg1RTB0GRYnakAHQZ2ks8ZfFzEs86gV3Jz8w9mP5LhZvDXppg65Whfeh0C2knYCvj9BzFVRZe7nEF1Q0UgY4qBrLcA+pygGvoi2M2ldKl6Vd0V1A5VeB+9SeMNVLd3xWTiYiS5ZyC9cwD78W8M7NrSJnluoUcvpddOAz4cLZpfSYMPslZTKRS/yyl9rKADWT+zaOQvXwSxqBd1aLg/7VUe+WL6Nu9FRlAzJI0BPmfg3CVUiwzr+e5SVBnQSMxl2hCf+GJ6mndr1+cWmbshUHdP/FY5nFkZ0IH0lE424p0EErbDrmD6PgtouI2Azp4IuvqZFKie6AAufBGoYWOlaxGorVhToLrOuUrHMreIoJX0zSULyBaY5tF09/BFYFUFZYAZHIaLZmPbVKSixFyb9/uPn4Jr08Xy9HUh6AZqr22iPpBeCPkQKnSbIuiYAPQKt11eTwddq3XQ1NCxqJBWDRrpq/XyKdBo8PiZ8Iy1F68aNFtgaUnM5GBf1nsEOnyE5Z4vpsd6WE2gA+kprX0X7b1VM6dr6HVZ1JuAATTsxWr0epX0LJhON6h6HeesCfRSesN47iTgek8EjTzQ79+8nQqFA89cBuOzSecYq9rcneaFE047y4Dm6aippVrlJ4JV3zZJz6oKf1JQ22S2cMxTGghUO8mcfSpQFW4Ct2wTv9OEr9TgDjP1zd4AZj0l7suFXjmgFn7CEHhSAYZ5nyROoJZOktG8MsXk2n7XoK7y9OQeNRkwhd4VJG9f6dCvQS2uXalH1f9SAG1FPWxU5C+b/xr6PGPLPF+pR5cByTv7bED/AbbeDUnxhlN0AAAAAElFTkSuQmCC";
  }
  return str;
}

myInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getMyWeather(myInput.value);
  }
});

myLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess);
  } else {
    alert("Your browser not support geolocation api");
  }
});

async function onSuccess(position) {
  const { latitude, longitude } = position.coords;

  const data2 = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${myApiKey4}`
    )
  ).json();

  getMyWeather(data2.name);
}

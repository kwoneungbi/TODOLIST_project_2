const clock = document.querySelector("h2#clock");

const getClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
// 한번 호출 후 setInterval을 써야 1초 후부터 초를 세는것을 방지할 수 있다.
setInterval(getClock, 1000);
// 첫번째 인자는 함수이름, 두번째 인자는 ms (5000ms은 5s)
// 위의 setInterval은 5초 마다 sayHello 함수를 실행시킨다.

// setTimeout(sayHello, 5000);

import Car from "../src/Car";
import Race from "../src/Race";

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
}

describe('자동차 입출력 테스트', () => {
  test('전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다', () => {
    // given
    jest.spyOn(Math, 'random').mockReturnValue(0.4);
    const car = new Car('huru');
    const race = new Race();
    race.start();

    const logSpy = getLogSpy();

    // when
    for (let i=0; i<race.playNumber; i++) {
      car.move();
    }

    // then
    expect(logSpy).toHaveBeenCalledWith('huru: --');
    Math.random.mockRestore();
  })
})
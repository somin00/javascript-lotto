const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 숫자가 있습니다.");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1-45 외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR] 1-45 사이의 숫자가 아닙니다.");
  });

  test("숫자가 아닌 값 입력시 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["ㄱ", 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR] 숫자가 아닌 값을 입력했습니다.");
  });
});

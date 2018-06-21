const { test } = QUnit;

QUnit.module("When getAmount method is called", () => {
  QUnit.module("When userId is 1", () => {
    QUnit.test("Should return $1000", assert => {
      assert.expect(1);

      const doneTest = assert.async(),
        userId = 1;
      let amount;

      getAmount(userId)
        .then(result => {
          amount = result;
        });

      setTimeout(() => {
        assert.ok(amount == "$1000", "Amount error");
        doneTest();
      }, 3000);
    });
  });

  QUnit.module("When userId is different to 1", () => {
    QUnit.test("Should return 'unknown user'", assert => {
      assert.expect(1);

      const doneTest = assert.async(),
        userId = 5;
      let userError;

      getAmount(userId)
        .then(() => {}, result => {
          userError = result;
        });

      setTimeout(() => {
        assert.ok(userError == "unknown user", "User error");
        doneTest();
      }, 3000);
    });
  });
});

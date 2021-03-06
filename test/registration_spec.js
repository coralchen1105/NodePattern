Registration = require("../lib/registration");

describe("Registration", function() {
  describe("a valid application", function() {
    var regResult = {};
    before(function() {
      regResult = Registration.applyForMembermochship({
        email: "coralchen@gmail.com",
        password: "goofy",
        confirm: "goofy"
      });
    });

    it("is successful", function() {
      regResult.success.should.equal(true);
    });
    it("creates a user", function() {
      regResult.user.should.be.defined;
    });
    it("creates a log entry", function() {
      regResult.log.should.be.defined;
    });
    it("sets the user's status to approved", function() {
      regResult.user.status.should.equal("approved");
    });
    it("offers a welcome message", function() {
      regResult.message.should.equal("Welcome!");
    });
    it("increments the signInCount", function() {
      regResult.user.signInCount.should.equal(1);
    });
  });

  describe("an empty or null email", function() {
    it("is not successful", function() {
      regResult.success.should.equal(false);
    });
    it("tells user that email is required", function() {
      regResult.message.should.equal("Email and password are required");
    });
  });

  describe("empty or null password", function() {
    it("is not successful", function() {
      regResult.success.should.equal(false);
    });
    it("tells user that password is required", function() {
      regResult.message.should.equal("Email and password are required");
    });
  });

  describe("password and confirm mismatch", function() {
    it("is not successful", function() {
      regResult.success.should.equal(false);
    });
    it("tells user passwords don't match", function() {
      regResult.message.should.equal("Passwords don't match");
    });
  });

  describe("email already exists", function() {
    it("is not successful", function() {
      regResult.success.should.equal(false);
    });
    it("tells user that email already exists", function() {
      regResult.message.should.equal("This email already exists");
    });
  });
});

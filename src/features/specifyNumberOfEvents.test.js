import { loadFeature, defineFeature } from "jest-cucumber";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("user opened the app or selected a city", () => {});

    when("the user does not specify the number of shown events", () => {});

    let NumberOfEventsWrapper;
    then("a list of 32 events should return to the user", () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("user opened the app or selected a city", () => {});

    let NumberOfEventsWrapper;
    when("the user does specify the number of shown events", () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      NumberOfEventsWrapper.setState({ numberOfEvents: 16 });
    });

    then(
      "a list of events with the specified number should be returned to the user",
      () => {
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(16);
      }
    );
  });
});

import { Ibdd_in, Ibdd_out, ITestSpecification, Ibdd_in_any, Ibdd_out_any } from "testeranto/src/CoreTypes";

export type O = Ibdd_out<
  // Suites
  {
    Default: [string];
  },
  // Givens
  {
    ShowLoginTrue: [];
    ShowLoginFalse: [];
  },
  // Whens
  {
    iClickTheSignupButton: [];
    iClickTheLoginButton: [];
  },
  // Thens
  {
    onTabChangeWasCalled: [boolean[]];
  }
>;

export const specification: ITestSpecification<any, O> = (
  Suite: any,
  Given: any,
  When: any,
  Then
): any => {
  return [
    Suite.Default(
      "AuthTabs component behavior tests",
      {
        0: Given.ShowLoginTrue(
          [],
          [],
          [Then.onTabChangeWasCalled([])]
        ),
        
        1: Given.ShowLoginTrue(
          [],
          [When.iClickTheSignupButton()],
          [Then.onTabChangeWasCalled([false])]
        ),
        
        2: Given.ShowLoginFalse(
          [],
          [When.iClickTheLoginButton()],
          [Then.onTabChangeWasCalled([true])]
        ),

        3: Given.ShowLoginFalse(
          [],
          [When.iClickTheLoginButton()],
          [When.iClickTheSignupButton()],
          [Then.onTabChangeWasCalled([true, false])]
        ),
        

      },
      []
    ),
  ];
};

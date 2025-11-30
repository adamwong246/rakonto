import Testeranto from "testeranto/src/Web";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification, ITestAdapter } from "testeranto/src/CoreTypes";
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthTabs } from './AuthTabs';
import React from 'react';

console.log("HelloAuthTabs.Test")

// Define types for our BDD test
type I = Ibdd_in<
  null,
  React.FC<{ showLogin: boolean; onTabChange: (showLogin: boolean) => void }>,
  { component: React.ReactElement; container: HTMLElement },
  { activeTab: string; loginButton: HTMLElement; signUpButton: HTMLElement },
  () => { component: React.ReactElement; container: HTMLElement },
  (action: string, value?: boolean) => (state: { component: React.ReactElement; container: HTMLElement }) => { component: React.ReactElement; container: HTMLElement },
  (expected: { activeTab?: string; onTabChangeCalledWith?: boolean }) => (state: { component: React.ReactElement; container: HTMLElement }) => { component: React.ReactElement; container: HTMLElement }
>;

type O = Ibdd_out<
  // Suites
  {
    Default: [string];
  },
  // Givens
  {
    Default;
    ShowLoginTrue: [];
    ShowLoginFalse: [];
  },
  // Whens
  {
    ClickLoginTab: [];
    ClickSignUpTab: [];
  },
  // Thens
  {
    LoginTabActive: [];
    SignUpTabActive: [];
    OnTabChangeCalledWithTrue: [];
    OnTabChangeCalledWithFalse: [];
  }
>;

// Test Implementation
const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: "Testing AuthTabs component behavior",
  },

  givens: {
    Default: () => {
      const onTabChange = jest.fn();
      const { container } = render(<AuthTabs showLogin={true} onTabChange={onTabChange} />);
      return { 
        component: <AuthTabs showLogin={true} onTabChange={onTabChange} />, 
        container,
        onTabChange 
      };
    },
    ShowLoginTrue: () => {
      const onTabChange = jest.fn();
      const { container } = render(<AuthTabs showLogin={true} onTabChange={onTabChange} />);
      return { 
        component: <AuthTabs showLogin={true} onTabChange={onTabChange} />, 
        container,
        onTabChange 
      };
    },
    ShowLoginFalse: () => {
      const onTabChange = jest.fn();
      const { container } = render(<AuthTabs showLogin={false} onTabChange={onTabChange} />);
      return { 
        component: <AuthTabs showLogin={false} onTabChange={onTabChange} />, 
        container,
        onTabChange 
      };
    },
  },

  whens: {
    ClickLoginTab: () => (state) => {
      const loginButton = screen.getByText('Login');
      fireEvent.click(loginButton);
      return state;
    },
    ClickSignUpTab: () => (state) => {
      const signUpButton = screen.getByText('Sign Up');
      fireEvent.click(signUpButton);
      return state;
    },
  },

  thens: {
    LoginTabActive: () => (state) => {
      const loginButton = screen.getByText('Login');
      expect(loginButton.className).toContain('active');
      const signUpButton = screen.getByText('Sign Up');
      expect(signUpButton.className).not.toContain('active');
      return state;
    },
    SignUpTabActive: () => (state) => {
      const signUpButton = screen.getByText('Sign Up');
      expect(signUpButton.className).toContain('active');
      const loginButton = screen.getByText('Login');
      expect(loginButton.className).not.toContain('active');
      return state;
    },
    OnTabChangeCalledWithTrue: () => (state: any) => {
      expect(state.onTabChange).toHaveBeenCalledWith(true);
      return state;
    },
    OnTabChangeCalledWithFalse: () => (state: any) => {
      expect(state.onTabChange).toHaveBeenCalledWith(false);
      return state;
    },
  }
};

// Test Specification
const specification: ITestSpecification<I, O> = (
  Suite,
  Given,
  When,
  Then
) => {
  return [
    Suite.Default(
      "AuthTabs component behavior tests",
      {
        // Test 1: Default state shows Login as active
        testDefaultState: Given.Default(
          ["AuthTabs should initially show Login tab as active"],
          [],
          [Then.LoginTabActive()]
        ),
        
        // Test 2: Clicking Sign Up tab when Login is active
        testSwitchToSignUp: Given.ShowLoginTrue(
          ["When Login is active and Sign Up is clicked"],
          [When.ClickSignUpTab()],
          [Then.OnTabChangeCalledWithFalse()]
        ),
        
        // Test 3: Clicking Login tab when Sign Up is active  
        testSwitchToLogin: Given.ShowLoginFalse(
          ["When Sign Up is active and Login is clicked"],
          [When.ClickLoginTab()],
          [Then.OnTabChangeCalledWithTrue()]
        ),
        
        // Test 4: Verify Sign Up tab is active when showLogin is false
        testSignUpActive: Given.ShowLoginFalse(
          ["AuthTabs should show Sign Up tab as active when showLogin is false"],
          [],
          [Then.SignUpTabActive()]
        ),
      },
      []
    ),
  ];
};

// Test Adapter
const adapter: ITestAdapter<I> = {
  beforeEach: async (subject, initializer, testResource, initialValues, pm) => {
    return initializer();
  },
  andWhen: async (store, whenCB, testResource, pm) => {
    return whenCB(store);
  },
  butThen: async (store, thenCB, testResource, pm) => {
    return thenCB(store);
  },
  afterEach: async (store, key, pm) => {
    // Clean up after each test
  },
  afterAll: (store, pm) => {
    // Clean up after all tests
  },
  beforeAll: async (input, testResource, pm) => {
    return AuthTabs;
  },
  assertThis: (x) => {
    // Custom assertion logic if needed
  },
};

// Export the test
export default Testeranto<I, O, any>(
  AuthTabs,
  specification,
  implementation,
  adapter
);

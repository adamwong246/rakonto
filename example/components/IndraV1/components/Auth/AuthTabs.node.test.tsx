import Testeranto from "testeranto/src/Node";
import type { Ibdd_in, Ibdd_out, ITestImplementation, ITestAdapter, Ibdd_in_any, Ibdd_out_any } from "testeranto/src/CoreTypes";
import React from 'react';
import ReactTestRenderer, { act } from 'react-test-renderer';
import { expect } from 'chai';
import { AuthTabs } from './AuthTabs';
import { O, specification } from "./AuthTabs.test";

// Initialize global for React test environment
if (typeof global === 'undefined') {
  (window as any).global = window;
}
global.IS_REACT_ACT_ENVIRONMENT = true;

console.log("HelloAuthTabs.Test")

// Mock function to track onTabChange calls
type MockOnTabChange = {
  calls: boolean[];
  fn: (showLogin: boolean) => void;
};

type I = Ibdd_in<
  React.FC<{ showLogin: boolean; onTabChange: (showLogin: boolean) => void }>, // iinput
  { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }, // isubject
  { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }, // istore
  boolean[], // iselection
  unknown, // given
  unknown, // when
  unknown // then
>;

// Test Implementation
const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: "Testing AuthTabs component behavior",
  },

  givens: {
    ShowLoginTrue: () => {
      // Just return the props - the mock will be created in beforeEach
      console.log('DEBUG ShowLoginTrue: returning props');
      return { 
        showLogin: true, 
        onTabChange: () => {} // This will be replaced in beforeEach
      };
    },
    ShowLoginFalse: () => {
      // Just return the props - the mock will be created in beforeEach
      console.log('DEBUG ShowLoginFalse: returning props');
      return { 
        showLogin: false, 
        onTabChange: () => {} // This will be replaced in beforeEach
      };
    },
  },

  whens: {
    iClickTheSignupButton: () => async (store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }) => {
      console.log('DEBUG iClickTheSignupButton: before click, calls:', store.mockOnTabChange.calls);
      
      const signUpButton = store.renderer.root.findByProps({ children: 'Sign Up' });
      console.log('DEBUG iClickTheSignupButton: signUpButton props before click:', JSON.stringify(signUpButton.props));
      
      // Verify the onClick prop exists and is a function
      if (typeof signUpButton.props.onClick !== 'function') {
        throw new Error('Sign Up button onClick is not a function');
      }
      
      await act(async () => {
        signUpButton.props.onClick();
      });
      
      console.log('DEBUG iClickTheSignupButton: after click, calls:', store.mockOnTabChange.calls);
      return store;
    },
    iClickTheLoginButton: () => async (store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }) => {
      console.log('DEBUG iClickTheLoginButton: before click, calls:', store.mockOnTabChange.calls);
      
      const loginButton = store.renderer.root.findByProps({ children: 'Login' });
      console.log('DEBUG iClickTheLoginButton: loginButton props before click:', JSON.stringify(loginButton.props));
      
      // Verify the onClick prop exists and is a function
      if (typeof loginButton.props.onClick !== 'function') {
        throw new Error('Login button onClick is not a function');
      }
      
      await act(async () => {
        loginButton.props.onClick();
      });
      
      console.log('DEBUG iClickTheLoginButton: after click, calls:', store.mockOnTabChange.calls);
      return store;
    },
  },

  thens: {
    onTabChangeWasCalled: (expectedCalls: boolean[]) => (store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }) => {
      console.log('DEBUG onTabChangeWasCalled:');
      console.log('  expectedCalls:', expectedCalls);
      console.log('  actual calls:', store.mockOnTabChange.calls);
      
      expect(store.mockOnTabChange.calls).to.deep.equal(expectedCalls);
      return store.mockOnTabChange.calls;
    },
  }
};

// Test Adapter
const adapter: ITestAdapter<I> = {
  assertThis: (x) => x,
  
  beforeEach: async function (
    CComponent: React.FC<{ showLogin: boolean; onTabChange: (showLogin: boolean) => void }>,
    getProps: () => any
  ): Promise<{ renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }> {
    let renderer: ReactTestRenderer;
    try {
      const props = getProps();
      if (!CComponent || typeof CComponent !== 'function') {
        throw new Error(`Invalid component - expected React component but got: ${typeof CComponent}`);
      }

      // Create mock function that will track calls
      const mockOnTabChange: MockOnTabChange = {
        calls: [],
        fn: (newShowLogin: boolean) => {
          console.log('DEBUG onTabChange called with:', newShowLogin);
          mockOnTabChange.calls.push(newShowLogin);
        }
      };

      // Replace the onTabChange prop with our mock
      const testProps = {
        ...props,
        onTabChange: mockOnTabChange.fn
      };

      await act(async () => {
        try {
          const element = React.createElement(CComponent, testProps);
          
          if (!element || typeof element !== 'object') {
            throw new Error(`createElement returned invalid element: ${typeof element}`);
          }
          
          renderer = ReactTestRenderer.create(element);
        } catch (e) {
          console.error('[ERROR] Component creation failed:', {
            component: CComponent?.name,
            props: testProps,
            error: e
          });
          throw e;
        }
      });

      // Verify renderer is still mounted
      if (!renderer || !renderer.root) {
        throw new Error('Component unmounted immediately after creation');
      }

      return { renderer, mockOnTabChange };
    } catch (error) {
      console.error('Mounting error:', {
        error: error instanceof Error ? error.stack : error,
        component: CComponent?.name,
        props: getProps()
      });
      throw error;
    }
  },
  
  andWhen: async function (
    store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange },
    whenCB: any
  ): Promise<{ renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }> {
    try {
      if (!store.renderer?.root) {
        throw new Error('Renderer is not mounted before When step');
      }

      console.log('DEBUG andWhen: before whenCB, mock calls:', store.mockOnTabChange.calls);

      await act(async () => {
        try {
          await whenCB(store);
        } catch (e) {
          console.error('Error during When callback:', e);
          throw e;
        }
      });

      console.log('DEBUG andWhen: after whenCB, mock calls:', store.mockOnTabChange.calls);

      if (!store.renderer.root) {
        console.error('After When step - renderer state:', {
          mounted: !!store.renderer,
          rootExists: !!store.renderer?.root,
          lastOutput: store.renderer?.toJSON()
        });
        throw new Error('Renderer unmounted during When step');
      }

      return store;
    } catch (error) {
      console.error('Error in When step:', {
        error: error instanceof Error ? error.stack : error,
        rendererState: store.renderer?.toJSON(),
        mockCalls: store.mockOnTabChange.calls
      });
      throw error;
    }
  },

  butThen: async function (store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }, thenCB: any, tr: any) {
    try {
      if (!store.renderer?.root) {
        console.error('Then step - renderer state:', {
          mounted: !!store.renderer,
          rootExists: !!store.renderer?.root
        });
        throw new Error('Renderer unmounted before Then step');
      }

      // Add debug logging to see what's in the store before the assertion
      console.log('DEBUG butThen: store.mockOnTabChange.calls:', store.mockOnTabChange.calls);

      const result = await act(async () => {
        try {
          return await thenCB(store);
        } catch (e) {
          console.error('Error during Then callback:', e);
          throw e;
        }
      });

      if (!store.renderer.root) {
        throw new Error('Renderer unmounted during Then step');
      }

      return result;
    } catch (error) {
      console.error('Error in Then step:', {
        error: error instanceof Error ? error.stack : error,
        rendererState: store.renderer?.toJSON(),
        mockCalls: store.mockOnTabChange.calls
      });
      throw error;
    }
  },

  afterEach: async function (store: { renderer: ReactTestRenderer; mockOnTabChange: MockOnTabChange }, ndx: any, artificer: any) {
    try {
      if (store.renderer && typeof store.renderer.unmount === 'function') {
        await act(async () => {
          try {
            store.renderer.unmount();
          } catch (e) {
            console.warn('Error during unmount:', e);
          }
        });
      }
      return {};
    } catch (e) {
      console.error('Error in afterEach:', e);
      throw e;
    }
  },
  
  afterAll: () => {
    return;
  },

  beforeAll: async (s: any) => {
    return s;
  }
};

export default Testeranto<I, O, any>(
  AuthTabs,
  specification,
  implementation,
  adapter
);

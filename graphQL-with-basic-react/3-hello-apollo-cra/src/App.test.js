import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import App from "./App";
import { FETCH_REPO_QUERY } from "./queries/fetch-repositories";
import { act } from "react-dom/test-utils";

const wait = (ms = 0) => act(() => new Promise((done) => setTimeout(done, ms)));

// The MockedProvider exposes a mocked apollo client with
// a set of defined mocks - a list of responses the client
// is supposed to return for a given query.
const mocks = [
  {
    request: {
      query: FETCH_REPO_QUERY,
    },
    result: {
      data: {
        viewer: {
          repositories: {
            nodes: [
              {
                id: "testId",
                nameWithOwner: "test/test",
                url: "https://test.com",
                description: "repo description",
              },
            ],
          },
        },
      },
    },
  },
];

describe("<App/>", () => {
  it("should transition from loading to loaded state", async () => {
    // we render our component with a mocked Provider:
    // The provided Apollo client will use the provided
    // mocks instead of fetching data over the network.
    // ---
    // We use queryByText to find a component by it's text
    // content and queryByDisplayValue to test the value of
    // the <input/> field that holds our description.
    const { queryByText, queryByDisplayValue } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    expect(queryByText("Loading")).toBeTruthy();
    expect(queryByDisplayValue("repo description")).toBeFalsy();

    // The mocked Apollo client always returns the query in
    // the loading state and, afterwards, transitions to the
    // success state on the next event loop tick.
    // We can await a timeout await wait(0) to suspend the
    // execution of our test until the next tick.
    await wait(); // wait untill loading completed

    expect(queryByText("Loading")).toBeFalsy();
    expect(queryByDisplayValue("repo description")).toBeTruthy();
  });
});

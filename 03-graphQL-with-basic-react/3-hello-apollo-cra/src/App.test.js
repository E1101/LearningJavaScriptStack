import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import App from "./App";
import { FETCH_REPO_QUERY } from "./queries/fetch-repositories";
import { act } from "react-dom/test-utils";

const wait = (ms = 0) => act(() => new Promise((done) => setTimeout(done, ms)));

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
    const { queryByText, queryByDisplayValue } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    expect(queryByText("Loading")).toBeTruthy();
    expect(queryByDisplayValue("repo description")).toBeFalsy();

    await wait(); // wait untill loading completed

    expect(queryByText("Loading")).toBeFalsy();
    expect(queryByDisplayValue("repo description")).toBeTruthy();
  });
});

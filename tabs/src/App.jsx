import * as React from "react";
import "./App.css";

const tabContext = React.createContext({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

function TabProvider() {
  return null;
}

function TabTrigger({ value }) {
  const activeTabValue = null;
  const setActiveTabValue = () => {};

  const handleSetActiveTabValue = () => {};

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      TODO
    </button>
  );
}

function TabContent() {
  return null;
}

export default function App() {
  return (
    <section>
      <h1>Tabs</h1>
      <TabProvider defaultValue="tab-1">
        <div className="tabs">
          <TabTrigger value="tab-1">Tab 1</TabTrigger>
          <TabTrigger value="tab-2">Tab 2</TabTrigger>
          <TabTrigger value="tab-3">Tab 3</TabTrigger>
        </div>
        <TabContent value="tab-1">Tab Content 1</TabContent>
        <TabContent value="tab-2">Tab Content 2</TabContent>
        <TabContent value="tab-3">Tab Content 3</TabContent>
      </TabProvider>
    </section>
  );
}

import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  ATS as ATSView,
  Challenges as ChallengesView,
  DailyCoding as DailyCodingView,
  Dashboard as DashboardView,
  // Engagement as EngagementView,
  Message as MessageView,
  Portfolio as PortfolioView,
  Settings as SettingsView,
  Solutions as SolutionsView,
  Todolist as TodolistView,
} from './views';

import {
  UsersProfile as UsersProfileView
} from './DNU/Engagement/components';

import {
  TodoDetail as TodoDetailView,
  TodoCreate as TodoCreateView
} from './views/Todolist/components';

// import {
//   Todoincomplete as TodoincomepleteView,
//   Todocomplete as TodocompleteView,
// } from './views/Todolist/components';

// import {
//   ATSDetail as ATSDetailView,
//   ATSExperienceShare as ATSExperienceShareView,
// } from './views/ATS/components';

// import { ChallengesCollection as ChallengesSubmissionView } from './views/Challenges/components';

// import {
//   PortfolioPubic as PortfolioPublicView,
//   PortfolioEdit as PortfolioEditView,
// } from './views/Portfolio/components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      {/* <RouteWithLayout
        component={EngagementView}
        exact
        layout={MainLayout}
        path="/engagement"
      /> */}
      <RouteWithLayout
        component={ATSView}
        exact
        layout={MainLayout}
        path="/ats"
      />
      {/* <RouteWithLayout
        component={ATSDetailView}
        exact
        layout={MainLayout}
        path="/ats/detail"
      />
      <RouteWithLayout
        component={ATSExperienceShareView}
        exact
        layout={MainLayout}
        path="/ats/experience"
      /> */}
      {/* <RouteWithLayout
        component={ATSView}
        exact
        layout={MainLayout}
        path="/ats"
      />
      <RouteWithLayout
        component={ChallengesView}
        exact
        layout={MainLayout}
        path="/challenges"
      /> */}
      {/* <RouteWithLayout
        component={ChallengesSubmissionView}
        exact
        layout={MainLayout}
        path="challenges/submissions"
      /> */}
      {/* <RouteWithLayout
        component={DailyCodingView}
        exact
        layout={MainLayout}
        path="/dailycoding"
      /> */}
      <RouteWithLayout
        component={MessageView}
        exact
        layout={MainLayout}
        path="/message"
      />
      {/* <RouteWithLayout
        component={PortfolioView}
        exact
        layout={MainLayout}
        path="/portfolio"
      /> */}
      {/* <RouteWithLayout
        component={PortfolioPublicView}
        exact
        layout={MainLayout}
        path="/portfolio/public"
      />
      <RouteWithLayout
        component={PortfolioEditView}
        exact
        layout={MainLayout}
        path="/portfolio/edit"
      /> 
      <RouteWithLayout
        component={SolutionsView}
        exact
        layout={MainLayout}
        path="/solutions"
      /> */}
      
      <RouteWithLayout
        component={TodolistView}
        exact
        layout={MainLayout}
        path="/todolist"
      />
      {/* <RouteWithLayout
        component={TodoincomepleteView}
        exact
        layout={MainLayout}
        path="/todo/incomplete"
      />
      <RouteWithLayout
        component={TodocompleteView}
        exact
        layout={MainLayout}
        path="/todo/complete"
      /> */}
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      
      <RouteWithLayout
        component={UsersProfileView}
        exact
        layout={MainLayout}
        path="/profiledetail"
      />
      <RouteWithLayout
        component={TodoDetailView}
        exact
        layout={MainLayout}
        path="/tododetail"
      />
      <RouteWithLayout
        component={TodoCreateView}
        exact
        layout={MainLayout}
        path="/todocreate"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

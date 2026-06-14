import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { useScreenInit } from './useScreenInit';
export function App() {
  useScreenInit();
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>);

}
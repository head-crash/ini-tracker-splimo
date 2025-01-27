import { Component } from "@angular/core";

export interface MenuItem {
  label: string;
  path?: string;
  action?: () => void;
  component?: Component;
}
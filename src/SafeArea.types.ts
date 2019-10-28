import { NativeSyntheticEvent } from 'react-native';

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface SafeAreaSize {
  height: number;
  width: number;
}

export type InsetChangedEvent = NativeSyntheticEvent<{ insets: EdgeInsets }>;

export type InsetChangeNativeCallback = (event: InsetChangedEvent) => void;

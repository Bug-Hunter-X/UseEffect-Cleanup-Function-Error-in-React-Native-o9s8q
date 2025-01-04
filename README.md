# React Native useEffect Cleanup Function Error

This repository demonstrates a bug where a React Native `useEffect` hook's cleanup function throws an error after the component has unmounted. This leads to silent failures or crashes because the error is not always caught.

## Bug Description
The issue occurs when the cleanup function attempts to access or modify state or props that are no longer available after the component has been unmounted.  The error is not caught, resulting in inconsistencies and potential application crashes.

## Solution
The solution involves checking if the component is still mounted before accessing or modifying state or props within the cleanup function. This is achieved by using a `mounted` ref to track the component's mount status.
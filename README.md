# React Toast Hook
Introducing an advanced React toast service meticulously engineered to orchestrate the presentation and administration of notification toast messages on the client's viewport. This refined solution empowers users with granular control over the rendering and engagement of these pivotal notifications, thereby elevating the prevailing user experience.

## Demo

https://react-toast-rho.vercel.app/

## Usage

```
const { showToast } = useToast();

showToast({ message: 'Toast message', type: 'success' });
showToast({ message: 'Toast message', type: 'warning' });
showToast({ message: 'Toast message', type: 'danger' });
```

## API

Here are the available options for the `showToast` method:

```
type: 'success' | 'warning' | 'danger';
message: string;
title?: string; // Defaults to type
duration?: number; // Defaults to 6 seconds
```

## Realization
To implement the Toast Service I used **Factory Method** design pattern. It's illustrated on the diagram below:
<img width="471" alt="Screenshot 2023-08-22 at 13 39 47" src="https://github.com/S1mpler/react-toast/assets/6653492/f50af8a5-49ec-40bc-bd1a-c4f7c6ff05cb">

The factory function is presented in the following manner and is located as an auxiliary export within the factory file:
```
/**
 * Factory function for creating toasts of different types.
 * @param type - The type of toast: 'success', 'warning', or 'danger'.
 * @returns A function that creates a toast of the specified type.
 */
export const toastFactory = (type: 'success' | 'warning' | 'danger'): ToastCreator => ({
  success: new SuccessToastCreator(),
  warning: new WarningToastCreator(),
  danger: new DangerToastCreator(),
}[type]);
```

This factory function is invoked within the ToastProvider context when the showToast method is triggered:
```
/**
 * Display a new toast using the specified toast creation configuration.
 * @param toast - The configuration for creating the toast.
 */
const showToast = (toast: CreateToast): void => {
  const newToast = toastFactory(toast.type).createToast(toast);
  setToasts([newToast, ...toasts]);
};
```

Employing the **Factory Method** design pattern in this context offers several advantageous outcomes. By encapsulating the toast creation logic within the toastFactory function, the codebase benefits from enhanced maintainability, flexibility, and scalability.

Firstly, the Factory Method pattern abstracts away the complexities of object instantiation from the client code, promoting a more organized and modular structure. This separation of concerns facilitates easier maintenance and debugging, as modifications to toast creation or the addition of new toast types can be confined within the factory function without necessitating changes throughout the application.

Secondly, this approach affords remarkable flexibility. The ability to dynamically select and create different toast types based on the type parameter fosters a clear separation between the client code and the specifics of each toast implementation. This separation streamlines testing and promotes reusability, as changes or additions to toast types can be implemented without affecting other components.

Furthermore, the Factory Method pattern accommodates scalability with ease. Should the need arise to introduce additional toast types or modify the existing ones, the factory function can be updated without compromising the existing codebase. This adaptability is especially valuable in dynamic software projects where requirements might evolve over time.

In summary, leveraging the Factory Method design pattern in this scenario enhances the clarity, modularity, and adaptability of the code. It empowers developers to efficiently manage toast creation, fostering a more maintainable and extensible codebase while keeping the ToastProvider abstracted from the intricate details of each toast type's implementation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

import React from 'react';
import Form from './components/form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
             </header>
    </div>
  );
}
export default App;




//     <Card>
    //       <Card.Content>
    //         <Card.Header>Sign Up Form</Card.Header>
    //       </Card.Content>
    //   <FieldGroup
    //     control={this.loginForm}
    //     render={({ invalid }) => (
    //       <form onSubmit={this.handleSubmit}>
    //         <FieldControl
    //           name="username"
    //           options={{ validators: Validators.required }}
    //           render={({ handler, touched, hasError}) => (
    //             <div>
    //               <input placeholder={'First Name'} {...handler()} />
    //               <span>
    //                 {touched && hasError('required') && 'Username is required'}
    //               </span>
    //             </div>
    //           )}
    //         />
    //         <Divider />
    //         <FieldControl
    //           name="lastname"
    //           render={({ handler }) => (
    //             <div>
    //                 <input placeholder={'Last Name'} {...handler()} />
    //             </div>
    //           )}
    //         />
    //         <Divider />
    //         <FieldControl
    //           name="email"
    //           render={({ handler }) => (
    //             <div>
    //                 <input placeholder={'Email'} {...handler()} />
    //             </div>
    //           )}
    //         />
    //         <Divider />
    //         <FieldControl
    //           name="password"
    //           render={({ handler }) => (
    //             <div>
    //                 <input placeholder={'Password'} {...handler()} />
    //             </div>
    //           )}
    //         />
    //         <Divider />
    //         <FieldControl
    //           name="Mobileno"
    //           render={({ handler, touched, hasError }) => (
    //             <div>
    //                 <input placeholder={'Mobile Number'} {...handler()} />
    //             </div>
    //           )}
    //         />
    //         <Divider />
    //         <button type="submit" disabled={invalid}>
    //           Sign Up
    //         </button>
    //       </form>
    //     )}
    //   />
     
    //  </Card>
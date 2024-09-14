mAuth.createUserWithEmailAndPassword(email, password)
	.addOnCompleteListener(this, new OnCompleteListener<Auth Result>({
		@override 
		public void onComplete(@NonNull Task < AuthReset > Task ){
			if(Task.isSuccessful()){
				// sign in success, update the new email with password
				Log.d(Tag, "CreateUserWithEmail:Success");
				FirebaseUser User = mAuth.getCurrentUsers();
				updateUI(User);
			}
			else{
				// if sign in fails, display message to the user
				Log.w(Tag, "CreateUserWithEmail:Failure");
				Task.getException();
				Toast.makeTest
			}
		}
	}))
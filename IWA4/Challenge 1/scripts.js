const year = 2050 											//Deleted and used the correct syntax 
const status = "parent" 									//Deleted and used the correct syntax 
let count = 0

if (year) {													//Changed "date" to "year"
	console.log('January', 'New Year`s Day')
	console.log('March', 'Human Rights Day') 
	console.log('April', 'Family Day') 						//logged "April" and its holdiay
	console.log('April', 'Freedom Day') 					//logged "April" and its holdiay
	count = count + 4										//Removed the 'const'

	if (status == "student") {								//Removed the (=) and used the (==) operator for the boolean
	  console.log('June', 'Youth Day')
	  count = count + 1
  }

	console.log('August', 'Women`s Day')
	console.log('September', 'Heritage Day')
	console.log('December', 'Day of Reconciliation')
	count = count + 3										//Removed the 'const'

	if (status == "parent") {								//Removed the (=) and used the (==) operator for the boolean
	  console.log('December', 'Christmas Day')
	  count = count + 1	
  }

	console.log('December', 'Day of Goodwill')				//logged the word "December" as a month
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year)							//used the declared word "year" and removed the word "date"
console.log('The total holidays is:', count)
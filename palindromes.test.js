​const​ palindromes = require(​'./palindromes'​)
​ 	
​ 	describe(​'palindromes()'​, () => {
​ 	  it(​'correctly identifies one-word palindromes'​, () => {
​​①​	    expect(palindromes(​'madam'​)).toEqual([​'madam'​]); 
​ 	  });
​ 	});
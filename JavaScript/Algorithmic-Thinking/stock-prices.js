
			const obj = { 
				a: 1, 
				b: 2 
			}
			obj.a; // 1
			// obj['a'] === obj.a === 1;
			const s = { 
				stock_price: "$336.32"
			}
			s.stock_price;

			const stock_prices = [
        {
          stock_price: "$395.15" // 0
        },
        {
					// name   : value
          stock_price: "$336.32" // 1
        },
        {
          stock_price: "$211.44"
        },
        {
          stock_price: "$288.97"
        },
        {
          stock_price: "$466.56"
        },
        {
          stock_price: "$404.85"
        },
        {
          stock_price: "$304.08"
        },
        {
          stock_price: "$483.08"
        },
        {
          stock_price: "$241.51"
        },
        {
          stock_price: "$217.86"
        },
        {
          stock_price: "$434.82"
        },
        {
          stock_price: "$294.19"
        },
        {
          stock_price: "$429.15"
        },
        {
          stock_price: "$221.52"
        },
        {
          stock_price: "$276.21"
        },
        {
          stock_price: "$285.93"
        },
        {
          stock_price: "$303.67"
        },
        {
          stock_price: "$304.79"
        },
        {
          stock_price: "$379.76"
        },
        {
          stock_price: "$198.80"
        },
        {
          stock_price: "$234.66"
        },
        {
          stock_price: "$242.39"
        },
        {
          stock_price: "$442.32"
        },
        {
          stock_price: "$343.48"
        },
        {
          stock_price: "$407.46"
        },
        {
          stock_price: "$327.80"
        },
        {
          stock_price: "$234.48"
        },
        {
          stock_price: "$269.35"
        },
        {
          stock_price: "$213.13"
        },
        {
          stock_price: "$395.09"
        }
      ];
		
			// Input String: "$336.32" -> "336.32" -> Output Number: 336.32
			function getPrice( str ){
				str = str.replace( "$", "" ); 
				return parseFloat( str );
			}

			// console.log(  getPrice( stock_prices[0].stock_price ) ); 

      // Challenge #1: Get the highest stock price:
      // IDEAS!
      // for ( INITIAL CONDITION; TEST; AFTER ITERATION )
      // Keep track of the highest number so far...
      let currentlyHighest = -Infinity;
      for ( let counter = 0; counter < stock_prices.length; counter = counter + 1 ){
        // We have to compare currentCard with currentlyHighest
        let currentCard = stock_prices[counter].stock_price;
        currentCard = getPrice( currentCard ); 
        if ( currentCard > currentlyHighest ){
          currentlyHighest = currentCard;  
        } 
       // EXECUTED: AFTER ITERATION
      }
      console.log("highest: ", currentlyHighest );

      // CHALLENGE:
      // 1) Get the lowest possible value
      let currentlyLowest = Infinity;
      for ( let counter = 0; counter < stock_prices.length; counter = counter + 1 ){
        let currentCard = stock_prices[counter].stock_price;
        currentCard = getPrice( currentCard ); 
        if ( currentCard < currentlyLowest ){
          currentlyLowest = currentCard;  
        } 
      }
      console.log( currentlyLowest );

      // 2) Put the logic behind 'getLowest' and 'getHighest' 
      // in functions WITH PARAMETERS!!!
      // const highest =  getHighestFrom( stock_prices );
      // 483.08
      function getHighestFrom( array ){
        let currentlyHighest = -Infinity;
        for ( let counter = 0; counter < array.length; counter = counter + 1 ){
          // We have to compare currentCard with currentlyHighest
          let currentCard = array[counter].stock_price;
          currentCard = getPrice( currentCard ); 
          if ( currentCard > currentlyHighest ){
            currentlyHighest = currentCard;  
          } 
        }
        return currentlyHighest;
      }
      const highest2 = getHighestFrom( stock_prices ); // 483.08
      console.log( ">>", highest2 );
      // getHighestFrom( google_prices );
      // getHighestFrom( tesla_prices );

      // const lowest =  getLowestFrom( stock_prices );
      // 198.8

      function myAwesomeApp(){

        // A) Create the elements dynamically:
        const bar = document.createElement("div");
        console.log( bar );
        bar.setAttribute( "class", "bar another" );
        bar.getAttribute( "class" ); //-> "bar another"
        bar.setAttribute( "id", "unique" );
        bar.removeAttribute( "id" );
        bar.style.height = 100 + "px";
        bar.style.background = "lightgreen";
        document.querySelector(".graph").appendChild( bar );
        
        // B) 
        const markup = `
          <div class="bar" style="background:tomato;"></div>
          <div class="bar" id="highest" data-secret="sesame"></div>
        `
        // <style> #highest { background: lightgreen; } </style>
        document.querySelector(".graph").innerHTML += markup;
  
        const secret = document.getElementById("highest")
        .getAttribute("data-secret");

        setTimeout( function(){
          document.getElementById('highest').style.height = "0px";
        }, 2000 );

      }
      myAwesomeApp();

      // function forEach( array, function ){ ... return Array; }
      // function convertToNumber( input ){ return output; }
      // INPUT -> [ { stock_price: "$444"} ] OUTPUT -> [ 444 ]
      // const justValues = forEach( stock_prices, convertToNumber );
      // justValues === [ 334, 211, 334 ... ]

      
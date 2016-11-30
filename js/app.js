var initialCats = [
	{
		clickCount: 0,
		name:'Tabby',
		imgSrc: 'img/1.jpg',
		imgAttribution: 'https://flickr.com/img/cats',
		nickName: ['Mr.T','Taskie','Teddy','Thomas']
	},{
		clickCount: 0,
		name:'Tiger',
		imgSrc: 'img/2.jpg',
		imgAttribution: 'https://flickr.com/img/cats',
		nickName: ['Tiffney','Tom','Titan','Tester']
	},{
		clickCount: 0,
		name:'Scaredy',
		imgSrc: 'img/3.jpg',
		imgAttribution: 'https://flickr.com/img/cats',
		nickName: ['Scooby', 'Scatlet', 'Sam', 'Silky']
	},{
		clickCount: 0,
		name:'Shadow',
		imgSrc: 'img/4.jpg',
		imgAttribution: 'https://flickr.com/img/cats',
		nickName: ['Stefy','Staurt','Stifer','Sid']
	},{
		clickCount: 0,
		name:'Jessie',
		imgSrc: 'img/5.jpg',
		imgAttribution: 'https://flickr.com/img/cats',
		nickName: ['Jeffrey', 'Jame', 'Johny', 'Jet']
	}
];
var Cat = function(data) {
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc);
	self.imgAttribution = ko.observable(data.imgAttribution);
	self.nickName = ko.observableArray(data.nickName);
	self.level = ko.computed(function() {
		if (self.clickCount() < 10) {
			return 'NewBorn';
		}else if (self.clickCount() < 35) {
			return 'Infant';
		}else if (self.clickCount() < 50) {
			return 'Teen';
		}else{
			return 'Adult';
		}
	});
}

var ViewModel = function() {
	self.catList = ko.observableArray( [] );

	initialCats.forEach(function(catItem){
		this.catList.push( new Cat(catItem) );
	});

	self.currentCat = ko.observable( self.catList()[0] );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.selectedCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
}	

ko.applyBindings(new ViewModel());
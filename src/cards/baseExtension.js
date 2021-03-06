/*
Copyright 2014 Matthew M Morrow
http://matthewmmorrow.com

This file is part of Cards Board - Chrome Package an extension for the Cards Board extension for Chrome.
http://cardsboard.oneweekonewebsite.com

Cards Board - Chrome Package is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Cards Board - Chrome Package is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Cards Board - Chrome Package.  If not, see <http://www.gnu.org/licenses/>.
*/

var cardsboard = (function (module) {
	//Create an extension object
	module.baseExtension = new module.Extension(chrome.runtime.id);
	module.baseExtension.author = "Matthew Morrow";
	module.baseExtension.name = "Cards Board Base extension";
	module.baseExtension.description = "Cards for displaying the time, apps, and bookmarks.";
	
	return module;
}(cardsboard));
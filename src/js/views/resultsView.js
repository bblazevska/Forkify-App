import View from './View';
import previewView from './previewView';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Not recipes found for your query! Please try again';
  _message = '';

  
  _generateMarkup() {
    console.log(this._data);

    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();

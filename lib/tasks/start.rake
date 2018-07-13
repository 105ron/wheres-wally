namespace :start do
  task :development do
    Bundler.clean_exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'
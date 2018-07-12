namespace :start do
  task :development do
    Bundler.clean_exec{ exec 'heroku local -f Procfile.dev' }
  end
end

desc 'Start development server'
task :start => 'start:development'